/**
 * Validadores para cartão de crédito
 */

/**
 * Valida número de cartão usando algoritmo de Luhn
 */
export function validarNumeroCartao(numero: string): boolean {
  // Remove espaços e hífens
  const numeroLimpo = numero.replace(/[\s-]/g, '');
  
  // Verifica se tem apenas números e tamanho adequado
  if (!/^\d{13,19}$/.test(numeroLimpo)) {
    return false;
  }

  // Algoritmo de Luhn
  let soma = 0;
  let alternar = false;

  for (let i = numeroLimpo.length - 1; i >= 0; i--) {
    let digito = parseInt(numeroLimpo.charAt(i), 10);

    if (alternar) {
      digito *= 2;
      if (digito > 9) {
        digito -= 9;
      }
    }

    soma += digito;
    alternar = !alternar;
  }

  return soma % 10 === 0;
}

/**
 * Valida CVV (3 ou 4 dígitos)
 */
export function validarCVV(cvv: string): boolean {
  return /^\d{3,4}$/.test(cvv);
}

/**
 * Valida data de validade (MM/YY)
 */
export function validarDataValidade(data: string): boolean {
  if (!/^\d{2}\/\d{2}$/.test(data)) {
    return false;
  }

  const [mes, ano] = data.split('/').map(Number);
  
  // Valida mês
  if (mes < 1 || mes > 12) {
    return false;
  }

  // Valida se não está expirado
  const hoje = new Date();
  const anoAtual = hoje.getFullYear() % 100; // Últimos 2 dígitos
  const mesAtual = hoje.getMonth() + 1;

  if (ano < anoAtual || (ano === anoAtual && mes < mesAtual)) {
    return false;
  }

  return true;
}

/**
 * Formata número do cartão (adiciona espaços a cada 4 dígitos)
 */
export function formatarNumeroCartao(numero: string): string {
  const numeroLimpo = numero.replace(/\s/g, '');
  return numeroLimpo.replace(/(\d{4})/g, '$1 ').trim();
}

/**
 * Formata data de validade (adiciona barra)
 */
export function formatarDataValidade(data: string): string {
  const dataLimpa = data.replace(/\D/g, '');
  if (dataLimpa.length >= 2) {
    return dataLimpa.slice(0, 2) + '/' + dataLimpa.slice(2, 4);
  }
  return dataLimpa;
}

/**
 * Mascara número do cartão (mostra apenas últimos 4 dígitos)
 */
export function mascaraCartao(numero: string): string {
  const numeroLimpo = numero.replace(/\s/g, '');
  if (numeroLimpo.length < 4) return '****';
  return '**** **** **** ' + numeroLimpo.slice(-4);
}

/**
 * Identifica bandeira do cartão
 */
export function identificarBandeira(numero: string): string {
  const numeroLimpo = numero.replace(/\s/g, '');
  
  if (/^4/.test(numeroLimpo)) return 'Visa';
  if (/^5[1-5]/.test(numeroLimpo)) return 'Mastercard';
  if (/^3[47]/.test(numeroLimpo)) return 'American Express';
  if (/^6(?:011|5)/.test(numeroLimpo)) return 'Discover';
  if (/^35/.test(numeroLimpo)) return 'JCB';
  if (/^(?:2131|1800|35)/.test(numeroLimpo)) return 'JCB';
  if (/^3(?:0[0-5]|[68])/.test(numeroLimpo)) return 'Diners Club';
  if (/^(5018|5020|5038|6304|6759|6761|6763)/.test(numeroLimpo)) return 'Maestro';
  if (/^(606282|3841)/.test(numeroLimpo)) return 'Hipercard';
  if (/^(636368|438935|504175|451416|636297)/.test(numeroLimpo)) return 'Elo';
  
  return 'Desconhecida';
}
