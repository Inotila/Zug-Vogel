import React, { useEffect, useState } from 'react';
import '../../assets/css/index.css';
import { getUserProfile } from '../../services/authService';
import axios from 'axios';
import './assets/css/auth.css';
import './assets/css/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';  // Import the faEdit icon

interface User {
    name: string;
    email: string;
    phoneNumber: string;
    preferredLanguage: string;
    interests: string[]; // These are the names of the user's interests
    createdAt: Date;
}

const ProfilePage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [interests, setInterests] = useState<string[]>([]);
    const [availableActivities, setAvailableActivities] = useState<any[]>([]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [preferredLanguage, setPreferredLanguage] = useState('');
    const [message, setMessage] = useState('');

    // Edit mode states
    const [isEditingPhone, setIsEditingPhone] = useState(false);
    const [isEditingLanguage, setIsEditingLanguage] = useState(false);
    const [isEditingInterests, setIsEditingInterests] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            getUserProfile(token)
                .then((data) => {
                    console.log('User data fetched:', data);
                    setUser(data);
                    setInterests(data.interests || []);
                    setPhoneNumber(data.phoneNumber || '');
                    setPreferredLanguage(data.preferredLanguage || 'English');
                })
                .catch(() => setMessage('Failed to fetch profile.'));

            axios.get('http://localhost:5010/api/activities')
                .then(response => setAvailableActivities(response.data))
                .catch(() => setMessage('Failed to fetch activities.'));
        } else {
            setMessage('No token found, please log in.');
        }
    }, []);

    const handleActivityChange = (activityName: string) => {
        setInterests(prevInterests => {
            if (prevInterests.includes(activityName)) {
                // If the activity is already selected, remove it
                return prevInterests.filter(interest => interest !== activityName);
            } else {
                // If the activity is not selected, add it
                return [...prevInterests, activityName];
            }
        });
    };

    const updateUserField = async (field: 'phoneNumber' | 'preferredLanguage', value: string) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setMessage('User not authenticated.');
                return;
            }

            await axios.put('http://localhost:5010/api/users/update-profile',
                { [field]: value },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            // Reload the updated user profile
            getUserProfile(token)
                .then((data) => {
                    setUser(data);
                    setPhoneNumber(data.phoneNumber || '');
                    setPreferredLanguage(data.preferredLanguage || 'English');
                    alert(`${field} updated successfully!`);
                })
                .catch(() => setMessage(`Failed to fetch updated ${field}.`));

        } catch (err) {
            console.error(`Error updating ${field}`, err);
            setMessage(`Failed to update ${field}.`);
        }
    };

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setMessage('User not authenticated.');
                return;
            }

            const activityNames = interests;

            await axios.put('http://localhost:5010/api/activities/select-activities',
                { interests: activityNames },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            // Reload the updated user profile
            getUserProfile(token)
                .then((data) => {
                    setUser(data);
                    setInterests(data.interests || []);
                    alert('Profile updated successfully!');
                })
                .catch(() => setMessage('Failed to fetch updated profile.'));
        } catch (err) {
            console.error('Error updating profile', err);
            setMessage('Failed to update profile.');
        }
    };

    // Sort activities alphabetically by name
    const sortedActivities = [...availableActivities].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="container-fluid text-center">
            <div className="row hero-banner-container home-hero-banner-container d-flex">
                {/* Hero Banner */}
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
                    <div className='signup-login-container shadow-container mx-3'>
                        {user ? (
                            <div className='user-container'>
                                <h2>{user.name}</h2>
                                <p className='profile-attribute'> Email: {user.email}</p>

                                {/* Phone Number Section */}
                                <div className='updateable-attributes'>
                                    <p className='profile-attribute'>Phone Number: {phoneNumber}</p>
                                    {!isEditingPhone ? (
                                        <span onClick={() => setIsEditingPhone(true)} style={{ cursor: 'pointer', color: 'blue' }}>
                                            <FontAwesomeIcon icon={faEdit} /> {/* Font Awesome Edit Icon */}
                                        </span>
                                    ) : (
                                        <>
                                            <input
                                                type="text"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                placeholder="Enter your phone number"
                                            />
                                            <button className='mx-3' onClick={() => {
                                                updateUserField('phoneNumber', phoneNumber);
                                                setIsEditingPhone(false);
                                            }}>Save</button>
                                        </>
                                    )}
                                </div>

                                {/* Preferred Language Section */}
                                <div className='updateable-attributes'>
                                    <p className='profile-attribute'>Preferred Language: {preferredLanguage}</p>
                                    {!isEditingLanguage ? (
                                        <span onClick={() => setIsEditingLanguage(true)} style={{ cursor: 'pointer', color: 'blue' }}>
                                            <FontAwesomeIcon icon={faEdit} /> {/* Font Awesome Edit Icon */}
                                        </span>
                                    ) : (
                                        <>
                                            <select
                                                value={preferredLanguage}
                                                onChange={(e) => setPreferredLanguage(e.target.value)}
                                            >
                                                <option value="English">English</option>
                                                <option value="German">German</option>
                                                <option value="French">French</option>
                                            </select>
                                            <button className='mx-3' onClick={() => {
                                                updateUserField('preferredLanguage', preferredLanguage);
                                                setIsEditingLanguage(false);
                                            }}>Save</button>
                                        </>
                                    )}
                                </div>

                                {/* Interests Section with checkboxes */}
                                <div className='updateable-attributes activity-container'>
                                    <p className='profile-attribute mx-3'>Interests: </p>
                                    {isEditingInterests ? (
                                        <div className="interest-list-container">
                                            <p>
                                                Wählen Sie unten Ihr Interesse aus,
                                                <br />
                                                damit wir Ihnen ein maßgeschneidertes Erlebnis empfehlen können
                                            </p>
                                            {sortedActivities.map(activity => (
                                                <div className='interest-list' key={activity._id}>
                                                    <input
                                                        type="checkbox"
                                                        id={activity._id}
                                                        checked={interests.includes(activity.name)} // Check based on activity name
                                                        onChange={() => handleActivityChange(activity.name)} // Change based on activity name
                                                    />
                                                    <label className='mx-3' htmlFor={activity._id}>{activity.name}</label>
                                                </div>
                                            ))}
                                            <div className='interest-btn-container'>
                                                <button
                                                    className="save-button"
                                                    onClick={() => {
                                                        setIsEditingInterests(false);
                                                        handleSubmit();
                                                    }}
                                                >
                                                    Update
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            {user.interests?.length > 0 ? (
                                                user.interests.join(', ')
                                            ) : (
                                                <p>No interests selected yet</p>
                                            )}
                                            <span className='mx-3'
                                                onClick={() => setIsEditingInterests(true)}
                                                style={{ cursor: 'pointer', color: 'blue' }}>
                                                <FontAwesomeIcon icon={faEdit} /> {/* Font Awesome Edit Icon */}
                                            </span>
                                        </div>
                                    )}
                                </div>

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
