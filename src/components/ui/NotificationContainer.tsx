import { useNotification } from '../../contexts/NotificationContext';
import { Notification } from './Notification';

/**
 * Container de notificações
 * Posicionado no top-right da tela
 * Renderiza todas as notificações ativas
 */
export function NotificationContainer() {
  const { notifications, removeNotification } = useNotification();

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div
      className="fixed top-4 right-4 z-50 flex flex-col gap-2 sm:gap-3 max-w-[calc(100vw-2rem)] sm:max-w-md w-full pointer-events-none px-4 sm:px-0"
      aria-live="polite"
      aria-atomic="true"
    >
      {notifications.map((notification) => (
        <div key={notification.id} className="pointer-events-auto">
          <Notification
            notification={notification}
            onClose={removeNotification}
          />
        </div>
      ))}
    </div>
  );
}
