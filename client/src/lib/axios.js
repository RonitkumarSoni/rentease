import axios from 'axios';

// Development: use relative path (proxied by Vite)
// Production: use full backend URL
let baseURL = import.meta.env.VITE_API_URL || '/api';
if (baseURL.endsWith('/')) {
    baseURL = baseURL.slice(0, -1);
}

const api = axios.create({
    baseURL,
    withCredentials: true,
});

export default api;
