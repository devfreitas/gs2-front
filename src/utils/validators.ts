import type { ClienteCreate, ClienteUpdate } from '../types/cliente.types';

export interface ClienteFormErrors {
  nomeCompleto?: string;
  cpfNumero?: string;
  emailCliente?: string;
  password?: string;
  confirmPassword?: string;
}

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidCPF = (cpf: string): boolean => {
  const cleanCPF = cpf.replace(/\D/g, '');
  
  if (cleanCPF.length !== 11) return false;
  
  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cleanCPF)) return false;
  
  // Validação dos dígitos verificadores
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
  }
  let digit = 11 - (sum % 11);
  if (digit >= 10) digit = 0;
  if (digit !== parseInt(cleanCPF.charAt(9))) return false;
  
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
  }
  digit = 11 - (sum % 11);
  if (digit >= 10) digit = 0;
  if (digit !== parseInt(cleanCPF.charAt(10))) return false;
  
  return true;
};

export const validateClienteForm = (
  formData: Partial<ClienteCreate | ClienteUpdate>,
  confirmPassword?: string
): ClienteFormErrors => {
  const errors: ClienteFormErrors = {};

  // Validar nome completo
  if (!formData.nomeCompleto || formData.nomeCompleto.trim().length < 3) {
    errors.nomeCompleto = 'Nome completo deve ter pelo menos 3 caracteres';
  }

  // Validar CPF
  if (!formData.cpfNumero) {
    errors.cpfNumero = 'CPF é obrigatório';
  } else if (!isValidCPF(formData.cpfNumero)) {
    errors.cpfNumero = 'CPF inválido';
  }

  // Validar email
  if (!formData.emailCliente) {
    errors.emailCliente = 'Email é obrigatório';
  } else if (!isValidEmail(formData.emailCliente)) {
    errors.emailCliente = 'Email inválido';
  }

  // Validar senha
  if (!formData.password) {
    errors.password = 'Senha é obrigatória';
  } else if (formData.password.length < 6) {
    errors.password = 'Senha deve ter pelo menos 6 caracteres';
  }

  // Validar confirmação de senha (se fornecida)
  if (confirmPassword !== undefined) {
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirmação de senha é obrigatória';
    } else if (confirmPassword !== formData.password) {
      errors.confirmPassword = 'As senhas não coincidem';
    }
  }

  return errors;
};

// Aliases para compatibilidade
export const validateEmail = isValidEmail;
export const validateCPF = isValidCPF;

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};
