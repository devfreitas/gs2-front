/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        // Tema Claro
        light: {
          bg: '#ffffff',
          text: '#0f172a',
          'text-secondary': '#374151',
          'text-tertiary': '#6b7280',
          border: '#e5e7eb',
          card: '#ffffff',
          'card-hover': '#f9fafb',
        },
        // Tema Escuro
        dark: {
          bg: '#0f172a',
          text: '#f1f5f9',
          'text-secondary': '#e2e8f0',
          'text-tertiary': '#cbd5e1',
          border: '#475569',
          card: '#1e293b',
          'card-hover': '#334155',
        },
      },
      backgroundColor: {
        'primary-light': '#ffffff',
        'primary-dark': '#0f172a',
        'card-light': '#ffffff',
        'card-dark': '#1e293b',
      },
      textColor: {
        'primary-light': '#0f172a',
        'primary-dark': '#f1f5f9',
      },
      borderColor: {
        'primary-light': '#e5e7eb',
        'primary-dark': '#475569',
      },
    },
  },
}
