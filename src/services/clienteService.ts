import { apiRequest } from './api';
import type { Cliente, ClienteCreate, ClienteUpdate } from '../types/cliente.types';

/**
 * Serviço para operações CRUD de clientes
 */

/**
 * Cadastra um novo cliente
 * @param cliente - Dados do cliente a ser cadastrado
 * @returns Promise com o cliente cadastrado
 */
export async function cadastrarCliente(cliente: ClienteCreate): Promise<Cliente> {
  // Enviar CPF sem formatação (apenas números)
  const clienteParaEnviar = {
    ...cliente,
    cpfNumero: cliente.cpfNumero.replace(/\D/g, '') // Remove pontos e traço
  };
  
  return apiRequest<Cliente>('/cliente', {
    method: 'POST',
    body: JSON.stringify(clienteParaEnviar),
  });
}

/**
 * Lista todos os clientes cadastrados
 * @returns Promise com array de clientes
 */
export async function listarClientes(): Promise<Cliente[]> {
  return apiRequest<Cliente[]>('/clientes', {
    method: 'GET',
  });
}

/**
 * Atualiza dados de um cliente existente
 * @param cliente - Dados do cliente a ser atualizado (deve incluir id)
 * @returns Promise com o cliente atualizado
 */
export async function atualizarCliente(cliente: ClienteUpdate): Promise<Cliente> {
  if (!cliente.id) {
    throw new Error('ID do cliente é obrigatório para atualização');
  }
  
  return apiRequest<Cliente>(`/cliente/${cliente.id}`, {
    method: 'PUT',
    body: JSON.stringify(cliente),
  });
}

/**
 * Deleta um cliente
 * @param id - ID do cliente a ser deletado
 * @returns Promise com resposta da API
 */
export async function deletarCliente(id: number): Promise<void> {
  return apiRequest<void>(`/cliente/${id}`, {
    method: 'DELETE',
  });
}
