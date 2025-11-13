import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { ThemeToggleCompact } from '../ui/ThemeToggleCompact';

export function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800 transition-all duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 shrink-0 group"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <span className="text-white font-bold text-xl sm:text-2xl">S</span>
              </div>
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text hidden xs:inline">
              SkillHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all">
              Home
            </Link>
            <Link to="/sobre" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all">
              Sobre
            </Link>
            <Link to="/faq" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all">
              FAQ
            </Link>
            <Link to="/contato" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all">
              Contato
            </Link>
            <Link to="/integrantes" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all">
              Integrantes
            </Link>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2" />
            <Link to="/cursos" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all">
              Cursos
            </Link>
            {isAuthenticated && (
              <Link to="/dashboard" className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all">
                Dashboard
              </Link>
            )}
            <Link to="/admin" className="px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-all">
              Admin
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggleCompact />
            {isAuthenticated && user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-700 dark:text-gray-300 hidden xl:inline">
                  Olá, {user.nomeCompleto}
                </span>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm hover:shadow-md"
                >
                  Sair
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all">
                  Entrar
                </Link>
                <Link to="/cadastro" className="px-4 py-2 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm hover:shadow-md">
                  Cadastrar
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggleCompact />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4 space-y-1">
            <Link to="/" className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/integrantes" className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all" onClick={() => setMobileMenuOpen(false)}>
              Integrantes
            </Link>
            <Link to="/sobre" className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all" onClick={() => setMobileMenuOpen(false)}>
              Sobre
            </Link>
            <Link to="/faq" className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Link to="/contato" className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all" onClick={() => setMobileMenuOpen(false)}>
              Contato
            </Link>
            <div className="h-px bg-gray-200 dark:bg-gray-700 my-2" />
            <Link to="/cursos" className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all" onClick={() => setMobileMenuOpen(false)}>
              Cursos
            </Link>
            {isAuthenticated && (
              <Link to="/dashboard" className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all" onClick={() => setMobileMenuOpen(false)}>
                Dashboard
              </Link>
            )}
            <Link to="/admin" className="block px-4 py-2 text-base font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-all" onClick={() => setMobileMenuOpen(false)}>
              Admin
            </Link>
            <div className="h-px bg-gray-200 dark:bg-gray-700 my-2" />
            {isAuthenticated && user ? (
              <div className="px-4 py-2 space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Olá, {user.nomeCompleto}
                </p>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 text-base font-medium bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Sair
                </button>
              </div>
            ) : (
              <div className="px-4 py-2 space-y-2">
                <Link to="/login" className="block w-full px-4 py-2 text-center text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
                  Entrar
                </Link>
                <Link to="/cadastro" className="block w-full px-4 py-2 text-center text-base font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => setMobileMenuOpen(false)}>
                  Cadastrar
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
