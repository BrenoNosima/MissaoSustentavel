// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

// Interceptor simples (opcional)
api.interceptors.response.use(
  response => response,
  error => {
    // aqui dá pra logar ou transformar mensagens de erro
    return Promise.reject(error);
  }
);

export default api;
