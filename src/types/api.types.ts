/**
 * Resposta de sucesso genérica da API
 */
export interface ApiSuccessResponse<T = unknown> {
  data?: T;
  message: string;
}

/**
 * Resposta de erro da API
 */
export interface ApiErrorResponse {
  error: string;
  message: string;
  status: number;
}

/**
 * Union type para respostas da API
 */
export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

/**
 * Type guard para verificar se a resposta é um erro
 */
export function isApiError(response: ApiResponse<unknown>): response is ApiErrorResponse {
  return 'error' in response;
}

/**
 * Type guard para verificar se a resposta é de sucesso
 */
export function isApiSuccess<T>(response: ApiResponse<T>): response is ApiSuccessResponse<T> {
  return !('error' in response);
}
