import type { ReactNode } from 'react';

type CardVariant = 'default' | 'bordered' | 'elevated';

interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
}

export function Card({
  variant = 'default',
  children,
  className = '',
  header,
  footer,
}: CardProps) {
  const baseStyles = 'rounded-lg bg-white dark:bg-gray-800 transition-colors';

  const variantStyles = {
    default: 'border border-gray-200 dark:border-gray-700',
    bordered: 'border-2 border-gray-300 dark:border-gray-600',
    elevated: 'shadow-lg border border-gray-100 dark:border-gray-700 dark:shadow-gray-900/30',
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {header && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          {header}
        </div>
      )}
      <div className="px-6 py-4">
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-b-lg">
          {footer}
        </div>
      )}
    </div>
  );
}
