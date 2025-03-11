import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:5010/api/auth'; // Backend API URL

// Register new user
export const registerUser = async (name: string, email: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, { name, email, password });
  return response.data;
};

// Login user
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    console.log('Full response:', response);

    if (response.data.token) {
      console.log('Received token:', response.data.token);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userName', response.data.name); // Store the user's name
      console.log('Token saved:', response.data.token); // Confirm token is stored
      console.log('User name saved:', response.data.name);
    } else {
      console.error('No token received from server.');
    }

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Login error:', error.response?.data || error.message);
    } else {
      console.error('An unexpected error occurred:', error);
    }
    throw error;
  }
};

// Get user profile
export const getUserProfile = async (token: string) => {
  try {
      const response = await axios.get(`${API_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
      return response.data; // The user profile data
  } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Profile fetch error:', error.response?.data || error.message);
      } else {
        console.error('An unexpected error occurred:', error);
      }
      throw error;
  }
};
