/**
 * Tipos de notificação
 */
export type NotificationType = 'success' | 'error' | 'warning' | 'info';

/**
 * Interface para uma notificação
 */
export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number;
}

/**
 * Interface do contexto de notificações
 */
export interface NotificationContextType {
  notifications: Notification[];
  addNotification: (type: NotificationType, message: string, duration?: number) => void;
  removeNotification: (id: string) => void;
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
}
