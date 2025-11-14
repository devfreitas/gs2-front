import { useTheme } from '../../hooks/useTheme';
import { useEffect, useState } from 'react';

export function ThemeDebug() {
  const { theme, effectiveTheme, setTheme } = useTheme();
  const [htmlClass, setHtmlClass] = useState('');

  useEffect(() => {
    const updateClass = () => {
      setHtmlClass(document.documentElement.className);
    };
    
    updateClass();
    
    // Atualiza a cada 500ms para ver mudanças
    const interval = setInterval(updateClass, 500);
    
    return () => clearInterval(interval);
  }, [effectiveTheme]);

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-2xl border-2 border-blue-500 dark:border-blue-400 z-50 max-w-sm">
      <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
        🔍 Debug do Tema
      </h3>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Tema selecionado:</span>
          <strong className="text-blue-600 dark:text-blue-400">{theme}</strong>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Tema efetivo:</span>
          <strong className="text-purple-600 dark:text-purple-400">{effectiveTheme}</strong>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Classe HTML:</span>
          <strong className="text-green-600 dark:text-green-400">{htmlClass || 'nenhuma'}</strong>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Context API:</span>
          <strong className="text-green-600">✓ OK</strong>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Teste rápido:</p>
        <div className="flex gap-2">
          <button
            onClick={() => setTheme('light')}
            className={`flex-1 px-2 py-1 text-xs rounded font-medium transition-all ${
              theme === 'light'
                ? 'bg-yellow-400 text-black ring-2 ring-yellow-600'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            ☀️
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`flex-1 px-2 py-1 text-xs rounded font-medium transition-all ${
              theme === 'dark'
                ? 'bg-gray-900 text-white ring-2 ring-gray-600'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            🌙
          </button>
          <button
            onClick={() => setTheme('system')}
            className={`flex-1 px-2 py-1 text-xs rounded font-medium transition-all ${
              theme === 'system'
                ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            💻
          </button>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-500">
          Este card deve mudar de cor quando você clica nos botões
        </p>
      </div>
    </div>
  );
}
