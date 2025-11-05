import api from './api';

export async function registerUser(payload) {
  const res = await api.post('/usuarios', payload);
  return res.data;
}

export async function loginUser({ email, senha }) {
  const res = await api.post('/login', { email, senha });
  return res.data; // por ex.: { id, nome, email, pontos }
}
