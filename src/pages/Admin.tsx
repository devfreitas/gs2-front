import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useNotification } from '../hooks/useNotification';

/**
 * Página de Admin - Acesso simples com admin/admin
 */
export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { success, error } = useNotification();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      success('Acesso admin concedido!');
    } else {
      error('Credenciais inválidas');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    success('Logout realizado');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Acesso Admin
              </h1>
              <p className="text-gray-600 dark:text-slate-300 mt-2">
                Área restrita - Apenas administradores
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Usuário
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="admin"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="admin"
                  required
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Entrar
              </Button>
            </form>

            <div className="text-center">
              <button
                onClick={() => navigate('/')}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Voltar para o site
              </button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header Admin */}
      <header className="bg-white dark:bg-slate-900 shadow-md border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-slate-100">
            Painel Admin
          </h1>
          <Button variant="danger" onClick={handleLogout}>
            Sair
          </Button>
        </div>
      </header>

      {/* Conteúdo Admin */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card variant="elevated">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">6</div>
                <div className="text-gray-900 dark:text-slate-200 mt-2 font-semibold">Cursos</div>
              </div>
            </Card>
            <Card variant="elevated">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400">7.250</div>
                <div className="text-gray-900 dark:text-slate-200 mt-2 font-semibold">Alunos</div>
              </div>
            </Card>
            <Card variant="elevated">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">3</div>
                <div className="text-gray-900 dark:text-slate-200 mt-2 font-semibold">Gratuitos</div>
              </div>
            </Card>
            <Card variant="elevated">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">4.8</div>
                <div className="text-gray-900 dark:text-slate-200 mt-2 font-semibold">Avaliação</div>
              </div>
            </Card>
          </div>

          {/* Ações Rápidas */}
          <Card variant="elevated">
            <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              Ações Rápidas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button 
                variant="primary" 
                onClick={() => navigate('/clientes')}
                className="flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Gerenciar Clientes
              </Button>
              <Button variant="secondary">
                Gerenciar Cursos
              </Button>
              <Button variant="secondary">
                Ver Pagamentos
              </Button>
              <Button variant="secondary">
                Relatórios
              </Button>
            </div>
          </Card>

          {/* Informações */}
          <Card variant="elevated">
            <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-4">
              Informações do Sistema
            </h2>
            <div className="space-y-3 text-gray-900 dark:text-slate-200 font-medium">
              <p className="flex items-center gap-2">
                <span className="text-green-500">✅</span> Sistema operacional
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500">✅</span> Banco de dados conectado
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500">✅</span> Todos os serviços ativos
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
