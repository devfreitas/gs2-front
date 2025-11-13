/**
 * Base URL da API Backend
 */
const API_BASE_URL = 'https://gs-java-5srd.onrender.com/main';

/**
 * Classe customizada para erros da API
 */
export class ApiError extends Error {
  status: number;
  originalError?: any;

  constructor(
    message: string,
    status: number,
    originalError?: any
  ) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.originalError = originalError;
  }
}

/**
 * Função genérica para fazer requisições à API
 * Trata erros HTTP e retorna dados tipados
 */
export async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    console.log('Requisição:', {
      url,
      method: options?.method || 'GET',
      body: options?.body
    });
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      // Tentar extrair mensagem de erro do corpo da resposta
      const errorData = await response.json().catch(() => ({}));
      
      console.error('Erro da API:', {
        status: response.status,
        statusText: response.statusText,
        errorData
      });
      
      // Mapear status codes para mensagens apropriadas
      let errorMessage: string;
      
      switch (response.status) {
        case 400:
          errorMessage = errorData.message || errorData.error || 'Dados inválidos';
          break;
        case 401:
          errorMessage = 'Não autorizado';
          break;
        case 404:
          errorMessage = 'Recurso não encontrado';
          break;
        case 500:
          errorMessage = errorData.message || errorData.error || 'Erro interno do servidor. Verifique se o CPF ou email já estão cadastrados.';
          break;
        default:
          errorMessage = errorData.message || 'Erro na requisição';
      }
      
      throw new ApiError(errorMessage, response.status, errorData);
    }

    return await response.json();
  } catch (error) {
    // Se já é um ApiError, propagar
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Erro de rede ou outro erro não tratado
    throw new ApiError('Erro de conexão com o servidor', 0, error);
  }
}

/**
 * Exportar a base URL para uso em outros serviços se necessário
 */
export { API_BASE_URL };
