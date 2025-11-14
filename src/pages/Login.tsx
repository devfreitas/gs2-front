import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useNotification } from '../hooks/useNotification';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { isValidEmail } from '../utils/validators';

/**
 * Página de Login
 * Permite usuários autenticarem na aplicação
 */
export function Login() {
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  const { success, error: showError } = useNotification();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; auth?: string }>({});

  /**
   * Valida os campos do formulário
   * @returns true se válido, false caso contrário
   */
  const validateForm = (): boolean => {
    const newErrors: { email?: string; password?: string } = {};

    // Validar email obrigatório
    if (!email || email.trim().length === 0) {
      newErrors.email = 'Email é obrigatório';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Email inválido';
    }

    // Validar senha obrigatória
    if (!password || password.length === 0) {
      newErrors.password = 'Senha é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Manipula o submit do formulário
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Limpar erro de autenticação anterior
    setErrors((prev) => ({ ...prev, auth: undefined }));

    // Validar campos
    if (!validateForm()) {
      return;
    }

    try {
      // Chamar função de login do AuthContext
      await login(email, password);

      // Exibir notificação de sucesso
      success('Login realizado com sucesso!');

      // Redirecionar para dashboard após sucesso
      navigate('/dashboard');
    } catch (error) {
      // Exibir mensagem de erro de autenticação
      const errorMessage = error instanceof Error ? error.message : 'Erro ao fazer login';
      setErrors((prev) => ({ ...prev, auth: errorMessage }));
      showError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-slate-100">
            Entrar na sua conta
          </h2>
          <p className="mt-3 text-center text-sm md:text-base text-gray-700 dark:text-slate-300 font-medium">
            Ou{' '}
            <Link
              to="/cadastro"
              className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              crie uma nova conta
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Mensagem de erro de autenticação */}
            {errors.auth && (
              <div className="rounded-lg bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 p-4">
                <p className="text-sm font-semibold text-red-800 dark:text-red-300">
                  {errors.auth}
                </p>
              </div>
            )}

            {/* Campo de Email */}
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              placeholder="seu@email.com"
              autoComplete="email"
              disabled={loading}
            />

            {/* Campo de Senha */}
            <Input
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              placeholder="••••••••"
              autoComplete="current-password"
              disabled={loading}
            />
          </div>

          {/* Botão de Submit */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={loading}
            className="w-full"
          >
            Entrar
          </Button>
        </form>

        {/* Link para cadastro */}
        <div className="text-center">
          <p className="text-sm md:text-base text-gray-700 dark:text-slate-300 font-medium">
            Não tem uma conta?{' '}
            <Link
              to="/cadastro"
              className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
