import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/index.css';
import './assets/css/signup.css';

import { registerUser, loginUser } from '../../services/authService';

const SignUpPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate(); // Initialize the navigate function

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Register user
            const registerData = await registerUser(name, email, password);
            console.log('User registered:', registerData);
            setMessage('User registered successfully!');

            // Automatically log the user in after successful registration
            const loginData = await loginUser(email, password);
            console.log('User logged in:', loginData);
            localStorage.setItem('token', loginData.token); // Store the token in localStorage

            // After successful login, navigate to the profile page
            navigate('/profile');
        } catch (error: any) {
            // Safely handle error to avoid accessing undefined properties
            if (error.response) {
                console.error('Error:', error.response.data.message);
                setMessage(error.response.data.message);
            } else {
                console.error('An unexpected error occurred:', error);
                setMessage('An unexpected error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="container-fluid text-center">
            <div className="row hero-banner-container home-hero-banner-container d-flex">
            </div>
            <div className="row hero-text-container text-center">
                <div className="col">
                    <div className='hero-text'>
                        <p>Erstellen Sie ein Konto oder melden Sie sich an</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className='signup-login-container'>
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit">Sign Up</button>
                        </form>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
