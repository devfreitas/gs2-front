import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useNotification } from '../contexts/NotificationContext';
import { Layout } from '../components/Layout/Layout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

/**
 * Página Home (Dashboard)
 * Página inicial para usuários autenticados
 * Exibe informações do usuário e navegação para outras páginas
 */
export function Home() {
  const { user, logout } = useAuth();
  const { info } = useNotification();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    info('Você saiu da sua conta');
    navigate('/login');
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Seção de boas-vindas */}
        <div className="bg-linear-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-lg shadow-lg p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">
            Bem-vindo, {user?.nomeCompleto}!
          </h1>
          <p className="text-blue-100 text-lg">
            Gerencie seus clientes e informações de forma simples e eficiente
          </p>
        </div>

        {/* Informações do usuário */}
        <Card variant="elevated">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Suas Informações
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Nome Completo
                </p>
                <p className="text-lg text-gray-900 dark:text-white">
                  {user?.nomeCompleto}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <p className="text-lg text-gray-900 dark:text-white">
                  {user?.emailCliente}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  CPF
                </p>
                <p className="text-lg text-gray-900 dark:text-white">
                  {user?.cpfNumero}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Cards de navegação */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Acesso Rápido
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card Meus Cursos */}
            <Card 
              variant="elevated" 
              className="hover:shadow-xl transition-shadow"
            >
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Meus Cursos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Acesse seus cursos e continue aprendendo
                  </p>
                </div>
                <Button variant="secondary" className="w-full" disabled>
                  Em breve
                </Button>
              </div>
            </Card>

            {/* Card Meus Cartões */}
            <div 
              className="cursor-pointer"
              onClick={() => navigate('/meus-cartoes')}
            >
              <Card 
                variant="elevated" 
                className="hover:shadow-xl transition-shadow h-full"
              >
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-green-600 dark:text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Meus Cartões
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Gerencie seus cartões de crédito salvos
                    </p>
                  </div>
                  <Button variant="primary" className="w-full">
                    Acessar
                  </Button>
                </div>
              </Card>
            </div>

            {/* Card Configurações */}
            <Card 
              variant="elevated" 
              className="hover:shadow-xl transition-shadow"
            >
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-purple-600 dark:text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Configurações
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Personalize suas preferências e configurações
                  </p>
                </div>
                <Button variant="secondary" className="w-full" disabled>
                  Em breve
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Botão de logout */}
        <div className="flex justify-center pt-4">
          <Button variant="danger" onClick={handleLogout} size="lg">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Sair da Conta
          </Button>
        </div>
      </div>
    </Layout>
  );
}
