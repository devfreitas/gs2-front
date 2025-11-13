import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    const baseStyles = 'w-full px-3 py-2 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1';
    
    const stateStyles = error
      ? 'border-red-500 focus:ring-red-500 dark:border-red-600 dark:focus:ring-red-600'
      : 'border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-600';

    const colorStyles = 'bg-white text-gray-900 placeholder-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500';

    const disabledStyles = 'disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-900';

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`${baseStyles} ${stateStyles} ${colorStyles} ${disabledStyles} ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
