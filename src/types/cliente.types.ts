/**
 * Interface principal para Cliente
 * Representa um cliente cadastrado no sistema
 */
export interface Cliente {
  id?: number;
  nomeCompleto: string;
  cpfNumero: string;
  emailCliente: string;
  password: string;
}

/**
 * Type para criação de cliente (sem id)
 */
export type ClienteCreate = Omit<Cliente, 'id'>;

/**
 * Type para atualização de cliente (id obrigatório, demais campos opcionais)
 */
export type ClienteUpdate = Required<Pick<Cliente, 'id'>> & Partial<Omit<Cliente, 'id'>>;

/**
 * Type para exibição de cliente (sem senha)
 */
export type ClienteDisplay = Omit<Cliente, 'password'>;
