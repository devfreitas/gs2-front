import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useNotification } from '../contexts/NotificationContext';
import type { Curso } from '../types/curso';
import type { CartaoCredito } from '../types/pagamento';
import { cursoService } from '../services/cursoService';
import { cartaoService } from '../services/cartaoService';
import {
  validarNumeroCartao,
  validarCVV,
  validarDataValidade,
  formatarDataValidade,
  identificarBandeira
} from '../utils/cartaoValidators';
import { isValidCPF } from '../utils/validators';

type MetodoPagamento = 'pix' | 'cartao';

/**
 * Página de Checkout - Pagamento de Cursos
 */
export function Checkout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { success, error: showError } = useNotification();

  const cursoId = searchParams.get('curso');
  const [curso, setCurso] = useState<Curso | null>(null);
  const [loading, setLoading] = useState(true);
  const [processando, setProcessando] = useState(false);

  // Método de pagamento
  const [metodoPagamento, setMetodoPagamento] = useState<MetodoPagamento>('pix');

  // Dados PIX
  const [qrCodePix, setQrCodePix] = useState('');

  // Dados do cartão
  const [cartao, setCartao] = useState<CartaoCredito>({
    numeroCartao: '',
    nomeCartao: '',
    dataValidade: '',
    cvv: '',
    cpfTitular: ''
  });

  const [errosCartao, setErrosCartao] = useState<Partial<Record<keyof CartaoCredito, string>>>({});

  useEffect(() => {
    carregarCurso();
  }, [cursoId]);

  const carregarCurso = async () => {
    if (!cursoId) {
      showError('Curso não encontrado');
      navigate('/cursos');
      return;
    }

    try {
      const cursoData = await cursoService.buscarCursoPorId(cursoId);
      if (!cursoData) {
        showError('Curso não encontrado');
        navigate('/cursos');
        return;
      }
      setCurso(cursoData);
    } catch (err) {
      showError('Erro ao carregar curso');
      navigate('/cursos');
    } finally {
      setLoading(false);
    }
  };

  const gerarQRCodePix = () => {
    // Gera um QR Code aleatório (não funcional)
    const qrCodeAleatorio = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=PIX_${Math.random().toString(36).substring(7)}`;
    setQrCodePix(qrCodeAleatorio);
  };

  const validarFormularioCartao = (): boolean => {
    const novosErros: Partial<Record<keyof CartaoCredito, string>> = {};

    if (!cartao.numeroCartao) {
      novosErros.numeroCartao = 'Número do cartão é obrigatório';
    } else if (!validarNumeroCartao(cartao.numeroCartao)) {
      novosErros.numeroCartao = 'Número do cartão inválido';
    }

    if (!cartao.nomeCartao || cartao.nomeCartao.trim().length < 3) {
      novosErros.nomeCartao = 'Nome do titular é obrigatório';
    }

    if (!cartao.dataValidade) {
      novosErros.dataValidade = 'Data de validade é obrigatória';
    } else if (!validarDataValidade(cartao.dataValidade)) {
      novosErros.dataValidade = 'Data de validade inválida ou expirada';
    }

    if (!cartao.cvv) {
      novosErros.cvv = 'CVV é obrigatório';
    } else if (!validarCVV(cartao.cvv)) {
      novosErros.cvv = 'CVV inválido (3 ou 4 dígitos)';
    }

    if (!cartao.cpfTitular) {
      novosErros.cpfTitular = 'CPF do titular é obrigatório';
    } else if (!isValidCPF(cartao.cpfTitular)) {
      novosErros.cpfTitular = 'CPF inválido';
    }

    setErrosCartao(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handlePagamentoPix = async () => {
    setProcessando(true);
    try {
      // Gera QR Code
      gerarQRCodePix();
      success('QR Code PIX gerado! Aguardando pagamento...');
      
      // Simula confirmação após 3 segundos (em produção, seria via webhook)
      setTimeout(() => {
        success('Pagamento confirmado! Você já pode acessar o curso.');
        navigate('/dashboard');
      }, 3000);
    } catch (err) {
      showError('Erro ao processar pagamento PIX');
    } finally {
      setProcessando(false);
    }
  };

  const handlePagamentoCartao = async () => {
    if (!validarFormularioCartao()) {
      return;
    }

    setProcessando(true);
    try {
      // Cadastra o cartão na API
      await cartaoService.cadastrarCartao(cartao);
      
      success('Pagamento aprovado! Você já pode acessar o curso.');
      navigate('/dashboard');
    } catch (err) {
      showError('Erro ao processar pagamento com cartão');
    } finally {
      setProcessando(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (metodoPagamento === 'pix') {
      await handlePagamentoPix();
    } else {
      await handlePagamentoCartao();
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300">Carregando...</p>
        </div>
      </Layout>
    );
  }

  if (!curso) {
    return null;
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Finalizar Compra
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resumo do Pedido */}
          <div className="lg:col-span-1">
            <Card variant="elevated">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Resumo do Pedido
              </h2>
              
              <div className="space-y-4">
                <img
                  src={curso.imagemUrl}
                  alt={curso.titulo}
                  className="w-full h-40 object-cover rounded-lg"
                />
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {curso.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {curso.instrutor}
                  </p>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      R$ {curso.preco.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-gray-900 dark:text-white">Total</span>
                    <span className="text-blue-600 dark:text-blue-400">
                      R$ {curso.preco.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Formulário de Pagamento */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Método de Pagamento
              </h2>

              {/* Seleção de Método */}
              <div className="flex gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setMetodoPagamento('pix')}
                  className={`flex-1 p-4 border-2 rounded-lg transition-all ${
                    metodoPagamento === 'pix'
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="font-semibold text-gray-900 dark:text-white">PIX</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Aprovação instantânea</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setMetodoPagamento('cartao')}
                  className={`flex-1 p-4 border-2 rounded-lg transition-all ${
                    metodoPagamento === 'cartao'
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">💳</div>
                    <div className="font-semibold text-gray-900 dark:text-white">Cartão de Crédito</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Parcelamento disponível</div>
                  </div>
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Pagamento PIX */}
                {metodoPagamento === 'pix' && (
                  <div className="space-y-6">
                    {!qrCodePix ? (
                      <div className="text-center py-8">
                        <div className="text-6xl mb-4">📱</div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Pagamento via PIX
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          Clique no botão abaixo para gerar o QR Code
                        </p>
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          loading={processando}
                        >
                          Gerar QR Code PIX
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Escaneie o QR Code
                        </h3>
                        <div className="flex justify-center mb-4">
                          <img
                            src={qrCodePix}
                            alt="QR Code PIX"
                            className="w-64 h-64 border-4 border-gray-300 dark:border-gray-600 rounded-lg"
                          />
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          Abra o app do seu banco e escaneie o código
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Aguardando confirmação do pagamento...
                        </p>
                        <div className="mt-6">
                          <div className="animate-pulse flex justify-center">
                            <div className="w-3 h-3 bg-blue-600 rounded-full mx-1"></div>
                            <div className="w-3 h-3 bg-blue-600 rounded-full mx-1 animation-delay-200"></div>
                            <div className="w-3 h-3 bg-blue-600 rounded-full mx-1 animation-delay-400"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Pagamento Cartão */}
                {metodoPagamento === 'cartao' && (
                  <div className="space-y-4">
                    {/* Número do Cartão */}
                    <div>
                      <Input
                        label="Número do Cartão"
                        type="text"
                        value={cartao.numeroCartao}
                        onChange={(e) => {
                          const valor = e.target.value.replace(/\D/g, '');
                          setCartao({ ...cartao, numeroCartao: valor });
                        }}
                        error={errosCartao.numeroCartao}
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        disabled={processando}
                      />
                      {cartao.numeroCartao && (
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          Bandeira: {identificarBandeira(cartao.numeroCartao)}
                        </p>
                      )}
                    </div>

                    {/* Nome do Titular */}
                    <Input
                      label="Nome do Titular"
                      type="text"
                      value={cartao.nomeCartao}
                      onChange={(e) => setCartao({ ...cartao, nomeCartao: e.target.value.toUpperCase() })}
                      error={errosCartao.nomeCartao}
                      placeholder="NOME COMO ESTÁ NO CARTÃO"
                      disabled={processando}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      {/* Data de Validade */}
                      <Input
                        label="Validade"
                        type="text"
                        value={cartao.dataValidade}
                        onChange={(e) => {
                          const valor = formatarDataValidade(e.target.value);
                          setCartao({ ...cartao, dataValidade: valor });
                        }}
                        error={errosCartao.dataValidade}
                        placeholder="MM/YY"
                        maxLength={5}
                        disabled={processando}
                      />

                      {/* CVV */}
                      <Input
                        label="CVV"
                        type="text"
                        value={cartao.cvv}
                        onChange={(e) => {
                          const valor = e.target.value.replace(/\D/g, '');
                          setCartao({ ...cartao, cvv: valor });
                        }}
                        error={errosCartao.cvv}
                        placeholder="123"
                        maxLength={4}
                        disabled={processando}
                      />
                    </div>

                    {/* CPF do Titular */}
                    <Input
                      label="CPF do Titular"
                      type="text"
                      value={cartao.cpfTitular}
                      onChange={(e) => {
                        const valor = e.target.value.replace(/\D/g, '');
                        setCartao({ ...cartao, cpfTitular: valor });
                      }}
                      error={errosCartao.cpfTitular}
                      placeholder="000.000.000-00"
                      maxLength={11}
                      disabled={processando}
                    />

                    {/* Botão de Pagamento */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={processando}
                        className="w-full"
                      >
                        Pagar R$ {curso.preco.toFixed(2)}
                      </Button>
                    </div>

                    {/* Informações de Segurança */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mt-4">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            Pagamento 100% Seguro
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                            Seus dados são criptografados e protegidos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
