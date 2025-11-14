import { useContext } from 'react';
import { NotificationContext } from '../contexts/NotificationContext';
import type { NotificationContextType } from '../types/notification.types';

export function useNotification(): NotificationContextType {
  const context = useContext(NotificationContext);

  if (context === undefined) {
    throw new Error('useNotification deve ser usado dentro de um NotificationProvider');
  }

  return context;
}
