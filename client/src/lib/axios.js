import axios from 'axios';

// Call sites already include `/api/...`, so keep the base URL at the host/root.
let baseURL = import.meta.env.VITE_API_URL || '';
if (baseURL.endsWith('/')) {
    baseURL = baseURL.slice(0, -1);
}
if (baseURL.endsWith('/api')) {
    baseURL = baseURL.slice(0, -4);
}

const api = axios.create({
    baseURL,
});

export default api;
