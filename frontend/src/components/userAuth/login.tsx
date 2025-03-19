import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom';
import '../../assets/css/index.css';
import './assets/css/auth.css';

import { loginUser } from '../../services/authService';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize navigate function

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await loginUser(email, password);
            console.log('Login response:', data); // Debug log
            if (!data || !data.token) {
                throw new Error('Invalid response from server');
            }
            localStorage.setItem('token', data.token); // Store token in localStorage
            setMessage('User logged in successfully!');
            navigate('/profile');
        } catch (error: any) {
            console.error('Login error:', error.response.data.message);
            setMessage(error.response.data.message);
        }
    };

    return (
        <div className="container-fluid text-center">
            <div className="row hero-banner-container home-hero-banner-container d-flex">
            </div>
            <div className="row hero-text-container text-center">
                <div className="col">
                    <div className='hero-text'>
                        <p>
                            Melden Sie sich bei Ihrem Konto an
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className='signup-login-container'>
                        <h2 className='auth-page-title'>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                className='auth-page-input' type="email" placeholder="Email" value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className='auth-page-input' type="password" placeholder="Password" value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className='auth-btn' type="submit">Login</button>
                        </form>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;