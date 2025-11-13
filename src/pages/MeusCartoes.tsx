import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout/Layout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useNotification } from '../contexts/NotificationContext';
import type { CartaoCredito } from '../types/pagamento';
import { cartaoService } from '../services/cartaoService';
import { mascaraCartao, identificarBandeira } from '../utils/cartaoValidators';

/**
 * Página para gerenciar cartões salvos
 */
export function MeusCartoes() {
  const [cartoes, setCartoes] = useState<CartaoCredito[]>([]);
  const [loading, setLoading] = useState(true);
  const { success, error: showError } = useNotification();

  useEffect(() => {
    carregarCartoes();
  }, []);

  const carregarCartoes = async () => {
    setLoading(true);
    try {
      const dados = await cartaoService.listarCartoes();
      setCartoes(dados);
    } catch (err) {
      showError('Erro ao carregar cartões');
    } finally {
      setLoading(false);
    }
  };

  const handleExcluir = async (id: number) => {
    if (!confirm('Deseja realmente excluir este cartão?')) {
      return;
    }

    try {
      await cartaoService.excluirCartao(id);
      success('Cartão excluído com sucesso');
      carregarCartoes();
    } catch (err) {
      showError('Erro ao excluir cartão');
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Meus Cartões
          </h1>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300">Carregando...</p>
          </div>
        ) : cartoes.length === 0 ? (
          <Card>
            <div className="text-center py-12">
              <div className="text-6xl mb-4">💳</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Nenhum cartão cadastrado
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Seus cartões salvos aparecerão aqui
              </p>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cartoes.map((cartao) => (
              <Card key={cartao.id} variant="elevated">
                <div className="space-y-4">
                  {/* Bandeira e Número */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                        {identificarBandeira(cartao.numeroCartao)}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Válido até {cartao.dataValidade}
                      </span>
                    </div>
                    <p className="text-lg font-mono text-gray-900 dark:text-white">
                      {mascaraCartao(cartao.numeroCartao)}
                    </p>
                  </div>

                  {/* Nome do Titular */}
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Titular</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {cartao.nomeCartao}
                    </p>
                  </div>

                  {/* Ações */}
                  <div className="flex gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => cartao.id && handleExcluir(cartao.id)}
                      className="flex-1"
                    >
                      Excluir
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
