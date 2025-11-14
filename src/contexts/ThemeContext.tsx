import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  effectiveTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

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
      
      // Adiciona a classe do tema
      root.classList.add(appliedTheme);
      
      // Remove estilos inline para deixar o Tailwind funcionar
      body.style.backgroundColor = '';
      body.style.color = '';
      
      // Define o color-scheme para o navegador
      root.style.colorScheme = appliedTheme;
      
      console.log('🎨 Classe HTML agora:', root.className);
      console.log('🎨 Tema aplicado:', appliedTheme === 'light' ? '☀️ CLARO' : '🌙 ESCURO');
      
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

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
}
