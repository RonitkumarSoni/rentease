import axios from 'axios';

// Development: use relative path (proxied by Vite)
// Production: use full backend URL
const baseURL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
    baseURL,
    withCredentials: true,
});

export default api;
