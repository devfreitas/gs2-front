import type { CartaoCredito } from '../types/pagamento';
import { apiRequest } from './api';

/**
 * Service para gerenciar cartões de crédito
 * Integração com API Java
 */
export const cartaoService = {
  /**
   * Cadastrar novo cartão
   */
  cadastrarCartao: async (cartao: CartaoCredito): Promise<CartaoCredito> => {
    try {
      return await apiRequest<CartaoCredito>('/cardcredito', {
        method: 'POST',
        body: JSON.stringify(cartao)
      });
    } catch (error) {
      console.error('Erro ao cadastrar cartão:', error);
      throw new Error('Erro ao cadastrar cartão de crédito');
    }
  },

  /**
   * Atualizar cartão existente
   */
  atualizarCartao: async (id: number, cartao: CartaoCredito): Promise<CartaoCredito> => {
    try {
      return await apiRequest<CartaoCredito>(`/cardcredito/${id}`, {
        method: 'PUT',
        body: JSON.stringify(cartao)
      });
    } catch (error) {
      console.error('Erro ao atualizar cartão:', error);
      throw new Error('Erro ao atualizar cartão de crédito');
    }
  },

  /**
   * Listar todos os cartões
   */
  listarCartoes: async (): Promise<CartaoCredito[]> => {
    try {
      return await apiRequest<CartaoCredito[]>('/cardcreditos');
    } catch (error) {
      console.error('Erro ao listar cartões:', error);
      throw new Error('Erro ao buscar cartões');
    }
  },

  /**
   * Excluir cartão
   */
  excluirCartao: async (id: number): Promise<void> => {
    try {
      await apiRequest<void>(`/cardcreditos/${id}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Erro ao excluir cartão:', error);
      throw new Error('Erro ao excluir cartão');
    }
  }
};
