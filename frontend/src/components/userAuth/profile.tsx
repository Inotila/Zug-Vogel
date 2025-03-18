import React, { useEffect, useState } from 'react';
import '../../assets/css/index.css';
import { getUserProfile } from '../../services/authService';
import axios from 'axios';

const ProfilePage: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const [interests, setInterests] = useState<string[]>([]); // Store selected activities
    const [availableActivities, setAvailableActivities] = useState<any[]>([]); // All available activities
    const [message, setMessage] = useState('');

    // Fetch user profile and available activities when component loads
    useEffect(() => {
        const token = localStorage.getItem('token'); // Get token from localStorage
        if (token) {
            // Fetch user profile
            getUserProfile(token)
                .then((data) => {
                    console.log('User data fetched:', data); // Log the response to check the populated interests
                    setUser(data); // Set user data if the API call succeeds
                    setInterests(data.interests || []); // Set user's selected activities (interests)
                })
                .catch((error) => {
                    setMessage('Failed to fetch profile.'); // Set error message if the API call fails
                });

            // Fetch available activities
            axios.get('http://localhost:5010/api/activities')
                .then(response => {
                    setAvailableActivities(response.data); // Set available activities
                })
                .catch(err => {
                    console.error('Error fetching activities', err);
                    setMessage('Failed to fetch activities.');
                });
        } else {
            setMessage('No token found, please log in.'); // If there's no token
        }
    }, []);

    // Handle activity selection
    const handleActivityChange = (activityId: string) => {
        setInterests((prevInterests) => {
            if (prevInterests.includes(activityId)) {
                return prevInterests.filter(id => id !== activityId); // Unselect activity
            }
            return [...prevInterests, activityId]; // Select activity
        });
    };

    // Handle submit of selected activities
    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('token'); // Get token from localStorage
            console.log('Token:', token);
            if (token) {
                console.log('Sending PUT request to:', 'http://localhost:5010/api/activities/select-activities');
                console.log('Request body:', { interests });
                console.log('Selected interests debug (activity IDs):', interests);

                // Step 1: Fetch the activity names using the selected activity IDs
                const activityNames = [];
                for (const activityId of interests) {
                    const activity = availableActivities.find(a => a._id === activityId);
                    if (activity) {
                        activityNames.push(activity.name);
                    }
                }

                console.log('Selected activity names *Debug:', activityNames);

                await axios.put('http://localhost:5010/api/activities/select-activities', { interests: activityNames }, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Send token for authentication
                    }
                });
                alert('Activities updated successfully');
            }
        } catch (err) {
            console.error('Error updating activities', err);
            setMessage('Failed to update activities.');
        }
    };

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
                    <div className='signup-login-container'>
                        {user ? (
                            <div>
                                <h2>{user.name}</h2>
                                <p>Email: {user.email}</p>
                                <p>Created at: {user.createdAt}</p>

                                {/* Display available activities and allow user to select */}
                                <h3>Your Interests</h3>
                                {user.interests && user.interests.length > 0 ? (
                                    <ul>
                                        {user.interests.map((interest: any) => (
                                            <li key={interest}>{interest}</li> // Displaying activity names (no need to access `interest.name` anymore)
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No interests selected yet</p>
                                )}

                                <h3>Select Activities</h3>
                                {availableActivities.length > 0 ? (
                                    <div>
                                        {availableActivities.map(activity => (
                                            <div key={activity._id}>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={interests.includes(activity._id)}
                                                        onChange={() => handleActivityChange(activity._id)}
                                                    />
                                                    {activity.name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>{message || 'Loading activities...'}</p>
                                )}
                                <button onClick={handleSubmit}>Save Selected Activities</button>
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
