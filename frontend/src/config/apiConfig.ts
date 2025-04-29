const isLocalhost =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

export const API_BASE_URL = isLocalhost
  ? 'http://localhost:5010'
  : 'https://zugvogelnamibia-7487d9708ad8.herokuapp.com/'; // Replace with your real Heroku URL
