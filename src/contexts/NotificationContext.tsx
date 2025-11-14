import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { NotificationContextType, Notification, NotificationType } from '../types/notification.types';

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

interface NotificationProviderProps {
  children: ReactNode;
}

const DEFAULT_DURATION = 5000;

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback(
    (type: NotificationType, message: string, duration: number = DEFAULT_DURATION): void => {
      const id = `${Date.now()}-${Math.random()}`;
      const notification: Notification = {
        id,
        type,
        message,
        duration,
      };

      setNotifications((prev) => [...prev, notification]);

      if (duration > 0) {
        setTimeout(() => {
          removeNotification(id);
        }, duration);
      }
    },
    []
  );

  const removeNotification = useCallback((id: string): void => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  }, []);

  const success = useCallback(
    (message: string, duration?: number): void => {
      addNotification('success', message, duration);
    },
    [addNotification]
  );

  const error = useCallback(
    (message: string, duration?: number): void => {
      addNotification('error', message, duration);
    },
    [addNotification]
  );

  const warning = useCallback(
    (message: string, duration?: number): void => {
      addNotification('warning', message, duration);
    },
    [addNotification]
  );

  const info = useCallback(
    (message: string, duration?: number): void => {
      addNotification('info', message, duration);
    },
    [addNotification]
  );

  const value: NotificationContextType = {
    notifications,
    addNotification,
    removeNotification,
    success,
    error,
    warning,
    info,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification(): NotificationContextType {
  const context = useContext(NotificationContext);

  if (context === undefined) {
    throw new Error('useNotification deve ser usado dentro de um NotificationProvider');
  }

  return context;
}
