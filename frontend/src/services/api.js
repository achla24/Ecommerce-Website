import axios from 'axios';

// The base URL is now dynamically set from the Vercel environment variable.
// We use a fallback to 'http://localhost:5000/api' for local development.
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const API = axios.create({
  baseURL: API_BASE_URL,
});

// Attach token automatically if present
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err) => Promise.reject(err)
);

// Auth
export const register = (data) => API.post('/auth/register', data);
export const login = (data) => API.post('/auth/login', data);

// Items
export const getItems = (params) => API.get('/items', { params });

// Cart
export const addToCart = (itemId) => API.post('/cart/add', { itemId, quantity: 1 });
export const getCart = () => API.get('/cart/me');
export const removeFromCart = (itemId) => API.delete(`/cart/remove/${itemId}`);
