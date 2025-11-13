# SkillHub - Plataforma de Cursos para Carreiras do Futuro

## 📋 Descrição

SkillHub é uma plataforma educacional moderna focada em preparar profissionais para as carreiras do futuro. O sistema oferece cursos sobre Inteligência Artificial, sustentabilidade, bem-estar no trabalho híbrido, e outras competências emergentes. A plataforma permite que usuários se cadastrem, explorem cursos gratuitos e pagos, gerenciem seus cartões de pagamento e acompanhem seu progresso educacional.

---

## 🚀 Status do Projeto

✅ **Em Desenvolvimento Ativo** - Versão 0.0.0

O projeto está em fase de desenvolvimento com as principais funcionalidades implementadas:
- ✅ Sistema de autenticação (login/cadastro)
- ✅ Catálogo de cursos
- ✅ Gerenciamento de clientes
- ✅ Sistema de checkout e pagamentos
- ✅ Painel administrativo
- ✅ Páginas institucionais (Sobre, FAQ, Contato)
- ✅ **Sistema de Temas (Claro/Escuro)** com Context API
- ✅ **Design Moderno e Responsivo** com Tailwind CSS v4
- ✅ **Animações e Micro-interações**
- 🔄 Integração com API backend em andamento

---

## 📑 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Endpoints ou Rotas Principais](#-endpoints-ou-rotas-principais)
- [Autores e Créditos](#-autores-e-créditos)
- [Screenshots / Demonstração](#-screenshots--demonstração)
- [Contato](#-contato)

---

## 💡 Sobre o Projeto

O SkillHub nasceu da necessidade de preparar profissionais para um mercado de trabalho em constante transformação. Com foco em:

- **🤖 IA como Parceira**: Aprenda a trabalhar colaborativamente com Inteligência Artificial
- **🌱 Economia Verde**: Explore carreiras sustentáveis e o futuro da economia
- **🧘 Bem-Estar**: Desenvolva habilidades para saúde mental no trabalho híbrido
- **🎯 Reskilling**: Requalificação profissional contínua
- **🥽 Ambientes Imersivos**: VR/AR no ambiente de trabalho
- **🤝 Inclusão**: Diversidade e inclusão produtiva

### Objetivos

- Democratizar o acesso à educação sobre carreiras emergentes
- Oferecer cursos gratuitos e acessíveis
- Preparar profissionais para profissões que ainda não existem
- Promover inclusão e diversidade no mercado de trabalho

---

## 🛠 Tecnologias Utilizadas

### Frontend
- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.9.3** - Superset tipado do JavaScript
- **Vite 7.2.2** - Build tool e dev server de alta performance
- **React Router DOM 7.9.5** - Roteamento e navegação

### Estilização e Design
- **Tailwind CSS 4.1.17** - Framework CSS utility-first moderno
- **@tailwindcss/vite 4.1.17** - Plugin Vite para Tailwind
- **Design System Customizado** - Componentes reutilizáveis e consistentes
- **Glassmorphism** - Efeitos de vidro fosco no header
- **Gradientes Animados** - Animações suaves e modernas
- **Dark Mode** - Sistema de temas claro/escuro com Context API

### Qualidade de Código
- **ESLint 9.39.1** - Linter para JavaScript/TypeScript
- **TypeScript ESLint 8.46.3** - Regras ESLint para TypeScript

### Backend (API)
- **API REST** - https://gs-java-5srd.onrender.com/main
- Desenvolvida em Java (Spring Boot)

---

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

### Passo a Passo

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd gs-front
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente** (se necessário)
```bash
# A API base está configurada em src/services/api.ts
# URL padrão: https://gs-java-5srd.onrender.com/main
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

5. **Acesse a aplicação**
```
http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Compila o projeto para produção
npm run lint     # Executa o linter
npm run preview  # Preview da build de produção
```

### Troubleshooting

#### Tema não está mudando?

Se o sistema de temas não estiver funcionando:

1. **Limpe o cache do Vite**:
```bash
# Windows
rmdir /s /q node_modules\.vite

# Linux/Mac
rm -rf node_modules/.vite
```

2. **Limpe o cache do navegador**:
   - Pressione `Ctrl + Shift + Delete`
   - Ou abra uma aba anônima (`Ctrl + Shift + N`)

3. **Verifique o console do navegador**:
   - Abra o DevTools (F12)
   - Procure por logs: `🎨 Aplicando tema:`
   - Verifique se a classe `dark` está no elemento `<html>`

4. **Teste manualmente**:
```javascript
// No console do navegador
document.documentElement.classList.add('dark');
```

#### Nota sobre Tailwind v4

Este projeto usa **Tailwind CSS v4**, que tem configuração diferente do v3:
- O `darkMode` é configurado no CSS, não no `tailwind.config.ts`
- Usa `@variant dark (.dark &);` no `index.css`
- Requer `@tailwindcss/vite` plugin

---

## 🎯 Como Usar

### Para Usuários

1. **Acesse a Landing Page**
   - Navegue até a página inicial para conhecer a plataforma

2. **Crie uma Conta**
   - Clique em "Criar Conta" ou "Cadastro"
   - Preencha seus dados (nome, email, CPF, senha)
   - Confirme o cadastro

3. **Faça Login**
   - Acesse a página de login
   - Insira suas credenciais
   - Você será redirecionado para o dashboard

4. **Explore os Cursos**
   - Navegue pelo catálogo de cursos
   - Veja cursos gratuitos e pagos
   - Filtre por categoria ou tema

5. **Realize uma Compra**
   - Selecione um curso pago
   - Vá para o checkout
   - Cadastre um cartão de pagamento
   - Finalize a compra

6. **Gerencie seus Cartões**
   - Acesse "Meus Cartões"
   - Adicione, edite ou remova cartões
   - Visualize cartões cadastrados

### Para Administradores

1. **Acesse o Painel Admin**
   - Navegue até `/admin`
   - Faça login com credenciais administrativas

2. **Gerencie Clientes**
   - Visualize lista de clientes
   - Edite informações de clientes
   - Remova clientes se necessário

3. **Gerencie Cursos**
   - Adicione novos cursos
   - Edite cursos existentes
   - Defina preços e disponibilidade

---

## 📁 Estrutura de Pastas

```
gs-front/
├── public/                      # Arquivos públicos estáticos
│   ├── joao.jpg                # Foto do integrante João
│   ├── leonardo.jpg            # Foto do integrante Leonardo
│   └── rafael.jpg              # Foto do integrante Rafael
│
├── src/                        # Código fonte da aplicação
│   ├── components/             # Componentes reutilizáveis
│   │   ├── Layout/            # Componentes de layout (Header, Footer)
│   │   ├── ui/                # Componentes de UI (Button, Input, etc)
│   │   └── ProtectedRoute.tsx # Componente de rota protegida
│   │
│   ├── contexts/              # Contextos React (Auth, Notification, Theme)
│   │   ├── AuthContext.tsx    # Contexto de autenticação
│   │   ├── NotificationContext.tsx # Contexto de notificações
│   │   └── ThemeContext.tsx   # Contexto de temas (claro/escuro)
│   │
│   ├── data/                  # Dados estáticos e mocks
│   │
│   ├── pages/                 # Páginas da aplicação
│   │   ├── Admin.tsx          # Painel administrativo
│   │   ├── Cadastro.tsx       # Página de cadastro
│   │   ├── Checkout.tsx       # Página de checkout
│   │   ├── Clientes.tsx       # Gerenciamento de clientes
│   │   ├── Contato.tsx        # Página de contato
│   │   ├── Cursos.tsx         # Catálogo de cursos
│   │   ├── FAQ.tsx            # Perguntas frequentes
│   │   ├── Home.tsx           # Dashboard do usuário
│   │   ├── Integrantes.tsx    # Página dos integrantes
│   │   ├── LandingPage.tsx    # Página inicial
│   │   ├── Login.tsx          # Página de login
│   │   ├── MeusCartoes.tsx    # Gerenciamento de cartões
│   │   └── Sobre.tsx          # Sobre a plataforma
│   │
│   ├── services/              # Serviços e integrações com API
│   │   ├── api.ts             # Configuração base da API
│   │   ├── cartaoService.ts   # Serviço de cartões
│   │   ├── clienteService.ts  # Serviço de clientes
│   │   └── cursoService.ts    # Serviço de cursos
│   │
│   ├── types/                 # Definições de tipos TypeScript
│   │
│   ├── utils/                 # Funções utilitárias
│   │
│   ├── App.tsx                # Componente principal da aplicação
│   ├── main.tsx               # Ponto de entrada da aplicação
│   └── index.css              # Estilos globais
│
├── .gitignore                 # Arquivos ignorados pelo Git
├── eslint.config.js           # Configuração do ESLint
├── index.html                 # HTML principal
├── package.json               # Dependências e scripts
├── tailwind.config.ts         # Configuração do Tailwind CSS
├── tsconfig.json              # Configuração do TypeScript
├── tsconfig.app.json          # Config TypeScript para app
├── tsconfig.node.json         # Config TypeScript para Node
├── vite.config.ts             # Configuração do Vite
└── README.md                  # Este arquivo
```

---

## 🛣 Endpoints ou Rotas Principais

### Rotas Públicas (Não requerem autenticação)

| Rota | Descrição |
|------|-----------|
| `/` | Landing Page - Página inicial da plataforma |
| `/login` | Página de login |
| `/cadastro` | Página de cadastro de novos usuários |
| `/cursos` | Catálogo de cursos disponíveis |
| `/admin` | Painel administrativo |
| `/integrantes` | Informações sobre os integrantes do projeto |
| `/sobre` | Sobre a plataforma SkillHub |
| `/faq` | Perguntas frequentes |
| `/contato` | Formulário de contato |

### Rotas Protegidas (Requerem autenticação)

| Rota | Descrição |
|------|-----------|
| `/dashboard` | Dashboard do usuário logado |
| `/clientes` | Gerenciamento de clientes (Admin) |
| `/checkout` | Página de checkout para compra de cursos |
| `/meus-cartoes` | Gerenciamento de cartões de pagamento |

### API Backend Endpoints

**Base URL**: `https://gs-java-5srd.onrender.com/main`

#### Clientes
- `GET /clientes` - Lista todos os clientes
- `GET /clientes/{id}` - Busca cliente por ID
- `POST /clientes` - Cria novo cliente
- `PUT /clientes/{id}` - Atualiza cliente
- `DELETE /clientes/{id}` - Remove cliente

#### Cursos
- `GET /cursos` - Lista todos os cursos
- `GET /cursos/{id}` - Busca curso por ID
- `POST /cursos` - Cria novo curso
- `PUT /cursos/{id}` - Atualiza curso
- `DELETE /cursos/{id}` - Remove curso

#### Cartões
- `GET /cartoes` - Lista todos os cartões
- `GET /cartoes/{id}` - Busca cartão por ID
- `POST /cartoes` - Cadastra novo cartão
- `PUT /cartoes/{id}` - Atualiza cartão
- `DELETE /cartoes/{id}` - Remove cartão

---

## 👥 Autores e Créditos

### Equipe de Desenvolvimento

**João**
- Função: Desenvolvedor Full Stack
- Contribuições: Desenvolvimento do backend e integração com API

**Leonardo**
- Função: Desenvolvedor Frontend
- Contribuições: Desenvolvimento da interface e componentes React

**Rafael**
- Função: Desenvolvedor Full Stack
- Contribuições: Arquitetura do sistema e gerenciamento de estado

### Agradecimentos

- Comunidade React e TypeScript
- Equipe do Tailwind CSS
- Todos os contribuidores open source das bibliotecas utilizadas

---

## 🎨 Sistema de Temas

O SkillHub possui um sistema completo de temas implementado com **Context API do React**, oferecendo uma experiência personalizada para cada usuário.

### Características

- **🌞 Tema Claro**: Layout branco e limpo, ideal para ambientes bem iluminados
- **🌙 Tema Escuro**: Layout preto e cinza, reduz fadiga visual em ambientes escuros
- **💻 Tema Sistema**: Detecta automaticamente a preferência do sistema operacional
- **💾 Persistência**: A escolha do tema é salva no localStorage
- **🔄 Transições Suaves**: Mudanças de tema com animações elegantes
- **♿ Acessibilidade**: Melhora a legibilidade para usuários com dificuldades visuais

### Como Usar

1. Clique no ícone de tema no header (☀️/🌙/💻)
2. Escolha entre:
   - **Claro**: Fundo branco com texto escuro
   - **Escuro**: Fundo preto/cinza com texto claro
   - **Sistema**: Sincroniza com a preferência do seu SO

### Implementação Técnica

O sistema de temas utiliza:
- **Context API** do React para gerenciamento de estado global (sem prop-drilling)
- **Tailwind CSS v4** com variante `dark:` para estilos condicionais
- **localStorage** para persistência da preferência do usuário
- **matchMedia API** para detecção da preferência do sistema

```typescript
// Exemplo de uso do hook useTheme
import { useTheme } from './contexts/ThemeContext';

function MeuComponente() {
  const { theme, setTheme, effectiveTheme } = useTheme();
  
  return (
    <div className="bg-white dark:bg-gray-900">
      <button onClick={() => setTheme('dark')}>
        Modo Escuro
      </button>
    </div>
  );
}
```

---

## 🎯 Design Moderno

O SkillHub foi desenvolvido com foco em **design moderno e atrativo**, seguindo as últimas tendências de UI/UX:

### Elementos de Design

- **Glassmorphism**: Header com efeito de vidro fosco (backdrop-blur)
- **Gradientes Vibrantes**: Uso estratégico de gradientes coloridos
- **Animações Suaves**: Micro-interações em hover e transições
- **Sombras Dinâmicas**: Profundidade visual com sombras que mudam no hover
- **Cards Interativos**: Elevação e transformação ao passar o mouse
- **Ícones Expressivos**: Emojis e ícones grandes para melhor comunicação visual
- **Espaçamento Generoso**: Layout respirável e organizado
- **Tipografia Hierárquica**: Tamanhos e pesos variados para melhor legibilidade

### Animações Customizadas

```css
/* Gradiente animado */
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
```

### Responsividade

O design é totalmente responsivo, adaptando-se perfeitamente a:
- 📱 **Mobile**: Smartphones (320px+)
- 📱 **Tablet**: Tablets (768px+)
- 💻 **Desktop**: Desktops (1024px+)
- 🖥️ **Large Desktop**: Telas grandes (1280px+)

---

## 📸 Screenshots / Demonstração

### Landing Page Moderna
A página inicial apresenta um design moderno e atrativo com:
- **Hero Section**: Badge animado, título com gradiente, CTAs destacados
- **Social Proof**: Avatares de usuários e rating com estrelas
- **Stats Cards**: Estatísticas com gradientes coloridos e hover effects
- **Features Section**: Cards interativos com ícones animados
- **Topics Grid**: 6 temas principais com hover effects
- **CTA Final**: Seção com gradiente vibrante e trust badges
- **Background Decorativo**: Elementos blur para profundidade visual

### Catálogo de Cursos
- Visualização de todos os cursos disponíveis
- Filtros por categoria e preço
- Cursos gratuitos e pagos
- Informações detalhadas de cada curso

### Dashboard do Usuário
- Visão geral dos cursos matriculados
- Progresso de aprendizagem
- Acesso rápido às funcionalidades

### Painel Administrativo
- Gerenciamento de clientes
- Gerenciamento de cursos
- Estatísticas e relatórios

### Sistema de Checkout
- Seleção de curso
- Cadastro de cartão de pagamento
- Confirmação de compra

---

## 📞 Contato

### Suporte e Dúvidas

Para dúvidas, sugestões ou reportar problemas:

- **Email**: suporte@skillhub.com.br
- **Formulário de Contato**: Acesse `/contato` na plataforma
- **FAQ**: Consulte nossa página de perguntas frequentes em `/faq`

### Redes Sociais

- LinkedIn: [SkillHub](https://linkedin.com/company/skillhub)
- Twitter: [@skillhub](https://twitter.com/skillhub)
- Instagram: [@skillhub.oficial](https://instagram.com/skillhub.oficial)

### Repositório

- GitHub: [github.com/skillhub/gs-front](https://github.com/skillhub/gs-front)
- Issues: Reporte bugs e solicite features através das Issues do GitHub

---

## 📄 Licença

Este projeto é parte de um trabalho acadêmico e está disponível para fins educacionais.

---

## 🔄 Atualizações Futuras

### Funcionalidades
- [ ] Sistema de avaliação de cursos
- [ ] Certificados digitais
- [ ] Gamificação e badges
- [ ] Fórum de discussão
- [ ] App mobile (React Native)
- [ ] Integração com plataformas de pagamento
- [ ] Sistema de recomendação de cursos com IA
- [ ] Modo offline para cursos

### Design e UX
- [ ] Mais animações e micro-interações
- [ ] Temas customizáveis (cores personalizadas)
- [ ] Modo de alto contraste para acessibilidade
- [ ] Animações de página (page transitions)
- [ ] Loading states mais elaborados
- [ ] Skeleton screens para melhor UX

---

**Desenvolvido com ❤️ pela equipe SkillHub**
