import type { ClienteCreate } from '../types/cliente.types';

/**
 * Valida formato de email usando regex
 * @param email - Email a ser validado
 * @returns true se o email é válido, false caso contrário
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') {
    return false;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Valida formato de CPF (XXX.XXX.XXX-XX)
 * @param cpf - CPF a ser validado
 * @returns true se o CPF está no formato correto, false caso contrário
 */
export function isValidCPF(cpf: string): boolean {
  if (!cpf || typeof cpf !== 'string') {
    return false;
  }
  
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return cpfRegex.test(cpf.trim());
}

/**
 * Valida senha (mínimo 6 caracteres)
 * @param password - Senha a ser validada
 * @returns true se a senha é válida, false caso contrário
 */
export function isValidPassword(password: string): boolean {
  if (!password || typeof password !== 'string') {
    return false;
  }
  
  return password.length >= 6;
}

/**
 * Interface para erros de validação do formulário de cliente
 */
export interface ClienteFormErrors {
  nomeCompleto?: string;
  cpfNumero?: string;
  emailCliente?: string;
  password?: string;
  confirmPassword?: string;
}

/**
 * Valida formulário de cliente e retorna objeto com erros
 * @param data - Dados do cliente a serem validados
 * @param confirmPassword - Senha de confirmação (opcional, para cadastro)
 * @returns Objeto com erros de validação (vazio se não houver erros)
 */
export function validateClienteForm(
  data: Partial<ClienteCreate>,
  confirmPassword?: string
): ClienteFormErrors {
  const errors: ClienteFormErrors = {};

  // Validar nome completo
  if (!data.nomeCompleto || data.nomeCompleto.trim().length === 0) {
    errors.nomeCompleto = 'Nome completo é obrigatório';
  } else if (data.nomeCompleto.trim().length < 3) {
    errors.nomeCompleto = 'Nome completo deve ter pelo menos 3 caracteres';
  }

  // Validar CPF
  if (!data.cpfNumero || data.cpfNumero.trim().length === 0) {
    errors.cpfNumero = 'CPF é obrigatório';
  } else if (!isValidCPF(data.cpfNumero)) {
    errors.cpfNumero = 'CPF deve estar no formato XXX.XXX.XXX-XX';
  }

  // Validar email
  if (!data.emailCliente || data.emailCliente.trim().length === 0) {
    errors.emailCliente = 'Email é obrigatório';
  } else if (!isValidEmail(data.emailCliente)) {
    errors.emailCliente = 'Email inválido';
  }

  // Validar senha
  if (!data.password || data.password.length === 0) {
    errors.password = 'Senha é obrigatória';
  } else if (!isValidPassword(data.password)) {
    errors.password = 'Senha deve ter pelo menos 6 caracteres';
  }

  // Validar confirmação de senha (se fornecida)
  if (confirmPassword !== undefined) {
    if (!confirmPassword || confirmPassword.length === 0) {
      errors.confirmPassword = 'Confirmação de senha é obrigatória';
    } else if (data.password !== confirmPassword) {
      errors.confirmPassword = 'As senhas não coincidem';
    }
  }

  return errors;
}
