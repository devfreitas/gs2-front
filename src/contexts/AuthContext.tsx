import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { AuthContextType } from '../types/auth.types';
import type { Cliente } from '../types/cliente.types';
import { listarClientes } from '../services/clienteService';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = 'auth_user';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<Cliente | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser) as Cliente;
        setUser(parsedUser);
      }
    } catch (error) {
      console.error('Erro ao carregar usuário do localStorage:', error);
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    try {
      const clientes = await listarClientes();

      const clienteEncontrado = clientes.find(
        (cliente) => 
          cliente.emailCliente === email && 
          cliente.password === password
      );

      if (!clienteEncontrado) {
        throw new Error('Email ou senha inválidos');
      }

      setUser(clienteEncontrado);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(clienteEncontrado));
    } finally {
      setLoading(false);
    }
  };

  const logout = (): void => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: user !== null,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
