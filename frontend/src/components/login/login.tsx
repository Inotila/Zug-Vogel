import React, { useState, ChangeEvent, FormEvent } from 'react';
import { loginUser } from '../../services/authService';

// Define the type for the credentials
interface Credentials {
    username: string;
    password: string;
}

const Login = () => {
    // Initialize the state with the correct type
    const [credentials, setCredentials] = useState<Credentials>({
        username: '',
        password: '',
    });

    // Handle change event for form inputs
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Call loginUser function when the form is submitted
        await loginUser(credentials);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
