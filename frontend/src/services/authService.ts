// src/services/authService.ts

interface Credentials {
  username: string;
  password: string;
}

interface AuthResponse {
  access: string;
  refresh: string;
}

const loginUser = async (credentials: Credentials): Promise<void> => {
  const response = await fetch('/api/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const data: AuthResponse = await response.json();

  if (data.access) {
    // Store the access token (and refresh token if you want to handle refreshing)
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh); // Optional
    console.log('User logged in and JWT stored.');
  } else {
    console.log('Login failed.');
  }
};

export { loginUser };
