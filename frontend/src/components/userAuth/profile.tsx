// ProfilePage.tsx
import React, { useEffect, useState } from 'react';
import '../../assets/css/index.css';
import { getUserProfile } from '../../services/authService';

const ProfilePage: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token'); // Get token from localStorage
        if (token) {
            getUserProfile(token) // Call the function you just updated
                .then((data) => {
                    setUser(data); // Set user data if the API call succeeds
                })
                .catch((error) => {
                    setMessage('Failed to fetch profile.'); // Set error message if the API call fails
                });
        } else {
            setMessage('No token found, please log in.'); // If there's no token
        }
    }, []);

    return (
        <div className="container-fluid text-center">
            <div className="row hero-banner-container home-hero-banner-container d-flex">
            </div>
            <div className="row hero-text-container text-center">
                <div className="col">
                    <div className='hero-text'>
                        <p>Willkommen in unserem Profil. Für einen besseren Service aktualisieren Sie bitte Ihre Profilinformationen.
                            Bitte beachten Sie: Wir geben Ihre Informationen NICHT an Dritte weiter.
                            Dies dient lediglich dazu, dass wir uns optimal auf Ihre Ankunft vorbereiten können.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className='signup-login-container'>
                        {user ? (
                            <div>
                                <h2>{user.name}</h2>
                                <p>Email: {user.email}</p>
                                <p>Created at: {user.createdAt}</p>
                            </div>
                        ) : (
                            <p>{message || 'Loading profile...'}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
