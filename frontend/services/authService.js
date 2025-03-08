// src/services/authService.js
const loginUser = async (credentials) => {
    const response = await fetch('/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
  
    const data = await response.json();
  
    if (data.access) {
      // Store the access token (and refresh token if you want to handle refreshing)
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh); // Optional
      console.log("User logged in and JWT stored.");
    } else {
      console.log("Login failed.");
    }
  };
  
  // Optionally, you can export the function to use it elsewhere
  export { loginUser };
  