import type { Cliente } from './cliente.types';

/**
 * Interface para o estado de autenticação
 */
export interface AuthState {
  user: Cliente | null;
  isAuthenticated: boolean;
  loading: boolean;
}

/**
 * Interface para o contexto de autenticação
 */
export interface AuthContextType {
  user: Cliente | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}
