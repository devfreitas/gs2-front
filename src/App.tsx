import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { NotificationContainer } from './components/ui/NotificationContainer';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LandingPage } from './pages/LandingPage';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Clientes } from './pages/Clientes';
import { Cursos } from './pages/Cursos';
import { Admin } from './pages/Admin';
import { Checkout } from './pages/Checkout';
import { MeusCartoes } from './pages/MeusCartoes';
import { Integrantes } from './pages/Integrantes';
import { Sobre } from './pages/Sobre';
import { FAQ } from './pages/FAQ';
import { Contato } from './pages/Contato';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          <BrowserRouter>
            <NotificationContainer />
            <Routes>
              {/* Rota pública - Landing Page */}
              <Route path="/" element={<LandingPage />} />
              
              {/* Rota pública - Login */}
              <Route path="/login" element={<Login />} />
              
              {/* Rota pública - Cadastro */}
              <Route path="/cadastro" element={<Cadastro />} />
              
              {/* Rota pública - Cursos */}
              <Route path="/cursos" element={<Cursos />} />
              
              {/* Rota pública - Admin */}
              <Route path="/admin" element={<Admin />} />
              
              {/* Rotas públicas - Institucionais */}
              <Route path="/integrantes" element={<Integrantes />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contato" element={<Contato />} />
              
              {/* Rota protegida - Checkout */}
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
              
              {/* Rota protegida - Meus Cartões */}
              <Route
                path="/meus-cartoes"
                element={
                  <ProtectedRoute>
                    <MeusCartoes />
                  </ProtectedRoute>
                }
              />
              
              {/* Rota protegida - Dashboard */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              
              {/* Rota protegida - Clientes */}
              <Route
                path="/clientes"
                element={
                  <ProtectedRoute>
                    <Clientes />
                  </ProtectedRoute>
                }
              />
              
              {/* Redirecionar rotas não encontradas para landing */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
