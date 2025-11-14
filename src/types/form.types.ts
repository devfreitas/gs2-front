/**
 * Union type para estado de loading
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Interface genérica para estado de formulário
 */
export interface FormState<T> {
  data: T;
  errors: Partial<Record<keyof T, string>>;
  isSubmitting: boolean;
  isValid: boolean;
}

/**
 * Intersection type para componentes com loading
 */
export type ComponentWithLoading<T> = T & {
  loadingState: LoadingState;
  error: string | null;
};
