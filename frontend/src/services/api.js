// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // backend base URL
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
// export const addToCart = (itemId) => {
//     return API.post('/cart/add', { itemId , quantity: 1 });
// };
// export const getCart = () => API.get('/cart');
// export const removeFromCart = (itemId) => API.post('/cart/remove', { itemId });

export const addToCart = (itemId) => API.post('/cart/add', { itemId, quantity: 1 });
export const getCart = () => API.get('/cart/me');
export const removeFromCart = (itemId) => API.delete(`/cart/remove/${itemId}`);


