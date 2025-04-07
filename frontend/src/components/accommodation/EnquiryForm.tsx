import React, { useState, useEffect } from 'react';
import "./assets/css/EnquiryForm.css";
import { getUserProfile } from '../../services/authService';

interface EnquiryFormProps {
    onClose: () => void;
    accommodationTitle: string;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ onClose, accommodationTitle }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [NumberOfAdults, setAdults] = useState(1);
    const [NumberOfChildren, setChildren] = useState(0);
    const [arrivalDate, setArrivalDate] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const today = new Date().toISOString().split("T")[0];

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            getUserProfile(token).then((data) => {
                if (data) {
                    setName(data.name || '');
                    setEmail(data.email || '');
                }
            });
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (new Date(arrivalDate) < new Date(today)) {
            alert("Sorry, arrival date cannot be in the past. Please select a new date.");
            return;
        }

        if (new Date(departureDate) <= new Date(arrivalDate)) {
            alert("Sorry, departure date must be after the arrival date.Please select a new date.");
            return;
        }

        setIsSubmitting(true);

        const formData = {
            name,
            email,
            NumberOfAdults,
            NumberOfChildren,
            arrivalDate,
            departureDate,
            accommodationTitle,
        };

        try {
            const response = await fetch('http://localhost:5010/api/enquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Enquiry sent successfully!");
                onClose();
            } else {
                const errorData = await response.json();
                console.error("Error sending enquiry:", errorData);
                alert("Failed to send enquiry. Please try again later.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="enquiry-overlay">
            <div className="enquiry-form-container">
                <h3>Booking Enquiry: <br />{accommodationTitle}</h3>
                <p className='form-disclosure-text'>Füllen Sie das untenstehende Formular aus
                    <br /> und wir werden uns in Kürze mit einer Antwort auf Ihre Anfrage bei Ihnen melden.
                    <br />
                    Bitte beachten Sie, dass es sich hierbei nicht um eine Buchung,
                    <br /> sondern um eine Buchungsanfrage handelt.
                    <br />
                    Vielen Dank für Ihr Interesse!
                </p>
                <form className='mt-1' onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        E-mail:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Anzahl Erwachsene:
                        <input
                            type="number"
                            min={1}
                            value={NumberOfAdults}
                            onChange={(e) => setAdults(Number(e.target.value))}
                            required
                        />
                    </label><label>
                        Anzahl der Kinder
                        <input
                            type="number"
                            min={0}
                            value={NumberOfChildren}
                            onChange={(e) => setChildren(Number(e.target.value))}
                            required
                        />
                    </label>
                    <label>
                        Ankunftsdatum:v
                        <input
                            type="date"
                            min={today}
                            value={arrivalDate}
                            onChange={(e) => setArrivalDate(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Abreisedatum:
                        <input
                            type="date"
                            value={departureDate}
                            min={arrivalDate || today}
                            onChange={(e) => setDepartureDate(e.target.value)}
                            required
                        />
                    </label>
                    <div className="button-group">
                        <button type="submit" className="btn main-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Senden...' : 'Verwandt'}
                        </button>
                        <button type="button" className="btn sub-btn cancel-btn" onClick={onClose}>
                            Stornieren
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EnquiryForm;
