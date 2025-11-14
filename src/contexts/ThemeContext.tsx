import { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  effectiveTheme: 'light' | 'dark';
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || 'light'; // Padrão: tema claro
  });

  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    
    const getSystemTheme = (): 'light' | 'dark' => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const applyTheme = (currentTheme: Theme) => {
      let appliedTheme: 'light' | 'dark';

      if (currentTheme === 'system') {
        appliedTheme = getSystemTheme();
      } else {
        appliedTheme = currentTheme;
      }

      console.log('🎨 Aplicando tema:', { currentTheme, appliedTheme });
      
      setEffectiveTheme(appliedTheme);
      
      // Remove TODAS as classes primeiro
      root.classList.remove('light', 'dark');
      
      // IMPORTANTE: Só adiciona a classe 'dark' quando for tema escuro
      if (appliedTheme === 'dark') {
        root.classList.add('dark');
      }
      
      // Aplica cores diretamente via inline styles para garantir que funcione
      if (appliedTheme === 'dark') {
        // Tema Escuro Moderno: Azul escuro profundo com texto claro suave
        body.style.backgroundColor = '#0f172a'; // slate-900 - Azul escuro profundo
        body.style.color = '#f1f5f9'; // slate-100 - Texto claro suave
      } else {
        // Tema Claro Moderno: Branco puro com texto escuro rico
        body.style.backgroundColor = '#ffffff'; // white - Branco puro
        body.style.color = '#0f172a'; // slate-900 - Texto escuro rico
      }
      
      body.style.transition = 'background-color 0.3s, color 0.3s';
      body.style.minHeight = '100vh';
      
      // Define o color-scheme para o navegador
      root.style.colorScheme = appliedTheme;
      
      console.log('🎨 Classe HTML agora:', root.className);
      console.log('🎨 Tema aplicado:', appliedTheme === 'light' ? '☀️ CLARO' : '🌙 ESCURO');
      console.log('🎨 Cor de fundo:', body.style.backgroundColor);
      console.log('🎨 Cor do texto:', body.style.color);
      
      localStorage.setItem('theme', currentTheme);
    };

    applyTheme(theme);

    // Listener para mudanças na preferência do sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, effectiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
