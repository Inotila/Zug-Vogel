import React, { useState, useEffect } from 'react';
import "./assets/css/EnquiryForm.css";
import { getUserProfile } from '../../services/authService';

interface EnquiryFormProps {
    onClose: () => void;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState(1);
    const [arrivalDate, setArrivalDate] = useState('');
    const [departureDate, setDepartureDate] = useState('');

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // We'll handle SMTP here later
        console.log({ name, email, people, arrivalDate, departureDate });
        onClose(); // Close after submit for now
    };

    return (
        <div className="enquiry-overlay">
            <div className="enquiry-form-container">
                <h3>Enquiry Form</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Number of People:
                        <input type="number" min={1} value={people} onChange={(e) => setPeople(Number(e.target.value))} required />
                    </label>
                    <label>
                        Arrival Date:
                        <input type="date" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} required />
                    </label>
                    <label>
                        Departure Date:
                        <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />
                    </label>
                    <div className="button-group">
                        <button type="submit" className="submit-btn">Submit</button>
                        <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EnquiryForm;
