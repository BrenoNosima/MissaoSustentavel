// src/services/desafios.js
import api from './api';

export async function listarDesafios() {
  const res = await api.get('/desafios');
  return res.data;
}

/**
 * Obtém detalhes de um desafio específico
 * @param {number} id ID do desafio
 * @returns {Promise<Object>} Dados do desafio
 * @throws {Error} Se houver erro na requisição ou ID inválido
 */
export async function obterDesafio(id) {
  if (!id) throw new Error('ID do desafio é obrigatório');
  
  try {
    const res = await api.get(`/api/desafios/${id}`);
    return res.data;
  } catch (error) {
    throw new Error('Erro ao obter detalhes do desafio: ' + error.message);
  }
}

/**
 * Retorna lista de desafios fixos
 * @returns {Promise<Array>} Lista de desafios fixos
 * @throws {Error} Se houver erro na requisição
 */
export async function listarDesafiosFixos() {
  try {
    const res = await api.get('/api/desafios/fixed');
    return res.data;
  } catch (error) {
    throw new Error('Erro ao listar desafios fixos: ' + error.message);
  }
}

/**
 * Retorna lista de desafios ativos da semana atual
 * @returns {Promise<Array>} Lista de desafios ativos
 * @throws {Error} Se houver erro na requisição
 */
export async function listarDesafiosAtuais() {
  try {
    const res = await api.get('/api/desafios');
    return res.data;
  } catch (error) {
    throw new Error('Erro ao listar desafios atuais: ' + error.message);
  }
}

/**
 * Retorna lista de desafios concluídos pelo usuário
 * @returns {Promise<Array>} Lista de desafios concluídos
 * @throws {Error} Se houver erro na requisição
 */
export async function listarDesafiosConcluidos() {
  try {
    const res = await api.get('/api/desafios/completed');
    return res.data;
  } catch (error) {
    throw new Error('Erro ao listar desafios concluídos: ' + error.message);
  }
}

/**
 * Envia evidência de conclusão do desafio
 * @param {number} desafioId ID do desafio
 * @param {Object} payload Dados da submissão
 * @param {number} payload.userId ID do usuário
 * @param {string} payload.evidenceUrl URL da evidência (foto/vídeo)
 * @returns {Promise<Object>} Dados da submissão criada
 * @throws {Error} Se houver erro na requisição ou dados inválidos
 */
export async function enviarEvidencia(desafioId, payload) {
  // Validações
  if (!desafioId) throw new Error('ID do desafio é obrigatório');
  if (!payload) throw new Error('Payload é obrigatório');
  if (!payload.userId) throw new Error('ID do usuário é obrigatório');
  if (!payload.evidenceUrl) throw new Error('URL da evidência é obrigatória');

  try {
    const res = await api.post(`/api/desafios/${desafioId}/submit`, payload);
    return res.data;
  } catch (error) {
    throw new Error('Erro ao enviar evidência do desafio: ' + error.message);
  }
}
