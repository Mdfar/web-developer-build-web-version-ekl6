import axios from 'axios';

/**

Shared API Client

Connects to the existing Android backend services. */ const apiClient = axios.create({ baseURL: process.env.VITE_API_BASE_URL || 'https://api.existing-app.com', headers: { 'Content-Type': 'application/json', }, });

apiClient.interceptors.request.use((config) => { const token = localStorage.getItem('auth_token'); if (token) { config.headers.Authorization = Bearer ${token}; } return config; });

export default apiClient;