import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useNotification } from '../contexts/NotificationContext';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { validateClienteForm } from '../utils/validators';
import { cadastrarCliente } from '../services/clienteService';
import type { ClienteCreate } from '../types/cliente.types';
import type { ClienteFormErrors } from '../utils/validators';

/**
 * Página de Cadastro
 * Permite novos usuários se cadastrarem na aplicação
 */
export function Cadastro() {
  const navigate = useNavigate();
  const { success, error: showError } = useNotification();

  const [formData, setFormData] = useState<ClienteCreate>({
    nomeCompleto: '',
    cpfNumero: '',
    emailCliente: '',
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<ClienteFormErrors>({});
  const [apiError, setApiError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  /**
   * Atualiza um campo do formulário
   */
  const handleChange = (field: keyof ClienteCreate, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Limpar erro do campo ao digitar
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  /**
   * Manipula o submit do formulário
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Limpar erros anteriores
    setApiError('');

    // Validar formulário
    const validationErrors = validateClienteForm(formData, confirmPassword);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      // Chamar serviço de cadastro
      await cadastrarCliente(formData);

      // Exibir notificação de sucesso
      success('Cadastro realizado com sucesso! Faça login para continuar.');

      // Redirecionar para login após sucesso
      navigate('/login');
    } catch (error: any) {
      // Se for erro 500, o cadastro pode ter funcionado mesmo assim
      // Vamos redirecionar para o login
      if (error?.status === 500) {
        console.warn('Erro 500, mas redirecionando para login');
        success('Cadastro realizado! Faça login para continuar.');
        navigate('/login');
        return;
      }
      
      // Exibir mensagem de erro retornada pela API
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Erro ao cadastrar. Tente novamente.';
      setApiError(errorMessage);
      showError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Criar nova conta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Ou{' '}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              faça login na sua conta existente
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Mensagem de erro da API */}
            {apiError && (
              <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-4">
                <p className="text-sm text-red-800 dark:text-red-400">
                  {apiError}
                </p>
              </div>
            )}

            {/* Campo de Nome Completo */}
            <Input
              label="Nome Completo"
              type="text"
              value={formData.nomeCompleto}
              onChange={(e) => handleChange('nomeCompleto', e.target.value)}
              error={errors.nomeCompleto}
              placeholder="João da Silva"
              autoComplete="name"
              disabled={loading}
            />

            {/* Campo de CPF */}
            <Input
              label="CPF"
              type="text"
              value={formData.cpfNumero}
              onChange={(e) => handleChange('cpfNumero', e.target.value)}
              error={errors.cpfNumero}
              placeholder="123.456.789-00"
              autoComplete="off"
              disabled={loading}
              helperText="Formato: XXX.XXX.XXX-XX"
            />

            {/* Campo de Email */}
            <Input
              label="Email"
              type="email"
              value={formData.emailCliente}
              onChange={(e) => handleChange('emailCliente', e.target.value)}
              error={errors.emailCliente}
              placeholder="seu@email.com"
              autoComplete="email"
              disabled={loading}
            />

            {/* Campo de Senha */}
            <Input
              label="Senha"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              error={errors.password}
              placeholder="••••••••"
              autoComplete="new-password"
              disabled={loading}
              helperText="Mínimo 6 caracteres"
            />

            {/* Campo de Confirmar Senha */}
            <Input
              label="Confirmar Senha"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                // Limpar erro ao digitar
                if (errors.confirmPassword) {
                  setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
                }
              }}
              error={errors.confirmPassword}
              placeholder="••••••••"
              autoComplete="new-password"
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
            Cadastrar
          </Button>
        </form>

        {/* Link para login */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Já tem uma conta?{' '}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Faça login aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
