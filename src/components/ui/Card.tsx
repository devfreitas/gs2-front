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
  const baseStyles = 'rounded-xl bg-white dark:bg-slate-800 transition-all duration-200';

  const variantStyles = {
    default: 'border border-gray-200 dark:border-slate-700',
    bordered: 'border-2 border-gray-300 dark:border-slate-600',
    elevated: 'shadow-lg hover:shadow-xl border border-gray-100 dark:border-slate-700 dark:shadow-slate-900/50',
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {header && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
          {header}
        </div>
      )}
      <div className="px-6 py-5">
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50 rounded-b-xl">
          {footer}
        </div>
      )}
    </div>
  );
}
