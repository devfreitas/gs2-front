/**
 * Tipos relacionados a pagamentos
 */

export interface CartaoCredito {
  id?: number;
  numeroCartao: string;
  nomeCartao: string;
  dataValidade: string; // MM/YY
  cvv: string;
  cpfTitular: string;
}

export interface DadosPagamento {
  cursoId: string;
  metodoPagamento: 'pix' | 'cartao';
  cartao?: CartaoCredito;
}

export interface PagamentoPix {
  qrCode: string;
  codigoPix: string;
  valor: number;
}

export type StatusPagamento = 'pendente' | 'aprovado' | 'recusado' | 'cancelado';
