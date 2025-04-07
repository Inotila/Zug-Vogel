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
    const [NumberOfChildren, setChildren] = useState(1);
    const [arrivalDate, setArrivalDate] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                <h3>Enquiry Form</h3>
                <form onSubmit={handleSubmit}>
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
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Number of Adults:
                        <input
                            type="number"
                            min={1}
                            value={NumberOfAdults}
                            onChange={(e) => setAdults(Number(e.target.value))}
                            required
                        />
                    </label><label>
                        Number of children
                        <input
                            type="number"
                            min={0}
                            value={NumberOfChildren}
                            onChange={(e) => setChildren(Number(e.target.value))}
                            required
                        />
                    </label>
                    <label>
                        Arrival Date:
                        <input
                            type="date"
                            value={arrivalDate}
                            onChange={(e) => setArrivalDate(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Departure Date:
                        <input
                            type="date"
                            value={departureDate}
                            onChange={(e) => setDepartureDate(e.target.value)}
                            required
                        />
                    </label>
                    <div className="button-group">
                        <button type="submit" className="btn main-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Submit'}
                        </button>
                        <button type="button" className="btn sub-btn cancel-btn" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EnquiryForm;
