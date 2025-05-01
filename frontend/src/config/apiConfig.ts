const isLocalhost =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

export const API_BASE_URL = isLocalhost
  ? 'http://localhost:5010'
  : 'https://www.zugvogelnamibia.com'; 
