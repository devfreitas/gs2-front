# SkillHub - Plataforma de Cursos para o Futuro do Trabalho

![Status](https://img.shields.io/badge/Status-Finalizado-green)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.2-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-cyan)

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Status do Projeto](#status-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Rotas Principais](#rotas-principais)
- [Funcionalidades](#funcionalidades)
- [Screenshots](#screenshots)
- [Autores e Créditos](#autores-e-créditos)
- [Contato](#contato)

## Sobre o Projeto

O **SkillHub** é uma plataforma educacional moderna focada em preparar profissionais para as carreiras do futuro. O projeto oferece cursos sobre Inteligência Artificial, Sustentabilidade, Bem-Estar, Ambientes Híbridos, Inclusão e Diversidade.

### Objetivos

- Democratizar o acesso à educação sobre profissões emergentes
- Desenvolver competências para o futuro do trabalho
- Oferecer cursos gratuitos e pagos com conteúdo de qualidade
- Proporcionar uma experiência de aprendizagem flexível e inclusiva

### Diferenciais

- Interface moderna e responsiva
- Modo claro/escuro
- Sistema de autenticação completo
- Checkout integrado para cursos pagos
- Design mobile-first
- Acessibilidade e inclusão

## Status do Projeto

**Finalizado**

Funcionalidades implementadas:
-  Sistema de autenticação (Login/Cadastro)
-  Catálogo de cursos com filtros
-  Landing page institucional
-  Páginas institucionais (Sobre, FAQ, Contato, Integrantes)
-  Sistema de checkout
-  Gerenciamento de cartões
-  Painel administrativo
-  Tema claro/escuro
-  Sistema de notificações
- Integração com API backend

## Tecnologias Utilizadas

### Frontend

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.9.3** - Superset JavaScript com tipagem estática
- **Vite 7.2.2** - Build tool e dev server ultrarrápido
- **React Router DOM 7.9.5** - Roteamento para aplicações React
- **TailwindCSS 4.1.17** - Framework CSS utility-first

### Ferramentas de Desenvolvimento

- **TypeScript ESLint** - Plugin ESLint para TypeScript
- **Vite Plugin React** - Plugin oficial do React para Vite

### Gerenciamento de Estado

- **Context API** - Gerenciamento de estado global (Auth, Theme, Notifications)

## Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passo a Passo

1. Instale as dependências:
```bash
npm install tailwindcss @tailwindcss/vite
npm install react-router-dom
npm install react-icons
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Preview do build de produção
npm run lint     # Executa o linter
```

## Como Usar

### Para Usuários

1. **Acesse a Landing Page**: Navegue pela página inicial para conhecer a plataforma
2. **Crie uma Conta**: Clique em "Criar Conta Gratuita" e preencha o formulário
3. **Explore os Cursos**: Acesse o catálogo e filtre por categoria, nível ou preço
4. **Cursos Gratuitos**: Acesse imediatamente os cursos gratuitos
5. **Cursos Pagos**: Adicione ao carrinho e finalize a compra no checkout
6. **Gerencie seus Cartões**: Salve cartões para compras futuras

### Para Administradores

1. **Acesse o Painel Admin**: Use credenciais de administrador
2. **Gerencie Cursos**: Adicione, edite ou remova cursos
3. **Visualize Clientes**: Acesse informações dos usuários cadastrados

## Estrutura de Pastas

```
Global-Solution/
├── public/                    # Arquivos públicos estáticos
│   ├── joao.jpg              # Foto do integrante João
│   ├── leonardo.jpg          # Foto do integrante Leonardo
│   └── rafael.jpg            # Foto do integrante Rafael
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Layout/          # Componentes de layout (Header, Footer)
│   │   ├── ui/              # Componentes de UI (Button, Card, etc)
│   │   └── ProtectedRoute.tsx
│   ├── contexts/            # Context API (Auth, Theme, Notifications)
│   ├── pages/               # Páginas da aplicação
│   │   ├── Admin.tsx        # Painel administrativo
│   │   ├── Cadastro.tsx     # Página de cadastro
│   │   ├── Checkout.tsx     # Página de checkout
│   │   ├── Clientes.tsx     # Listagem de clientes
│   │   ├── Contato.tsx      # Página de contato
│   │   ├── Cursos.tsx       # Catálogo de cursos
│   │   ├── FAQ.tsx          # Perguntas frequentes
│   │   ├── Home.tsx         # Dashboard do usuário
│   │   ├── Integrantes.tsx  # Página dos integrantes
│   │   ├── LandingPage.tsx  # Página inicial pública
│   │   ├── Login.tsx        # Página de login
│   │   ├── MeusCartoes.tsx  # Gerenciamento de cartões
│   │   └── Sobre.tsx        # Sobre o projeto
│   ├── services/            # Serviços e APIs
│   ├── types/               # Definições de tipos TypeScript
│   │   ├── api.types.ts
│   │   ├── auth.types.ts
│   │   ├── cliente.types.ts
│   │   ├── curso.ts
│   │   ├── form.types.ts
│   │   ├── notification.types.ts
│   │   └── pagamento.ts
│   ├── utils/               # Funções utilitárias
│   │   ├── cartaoValidators.ts
│   │   └── validators.ts
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Ponto de entrada
│   └── index.css            # Estilos globais
├── .gitignore
├── eslint.config.js        
├── index.html               # HTML principal
├── package.json            
├── tailwind.config.ts       
├── tsconfig.json            
├── vite.config.ts           
└── README.md                
```

## Rotas Principais

### Rotas Públicas

| Rota | Descrição |
|------|-----------|
| `/` | Landing page inicial |
| `/login` | Página de login |
| `/cadastro` | Página de cadastro de usuário |
| `/cursos` | Catálogo de cursos |
| `/admin` | Painel administrativo |
| `/integrantes` | Informações dos integrantes |
| `/sobre` | Sobre o projeto |
| `/faq` | Perguntas frequentes |
| `/contato` | Formulário de contato |

### Rotas Protegidas (Requer Autenticação)

| Rota | Descrição |
|------|-----------|
| `/dashboard` | Dashboard do usuário |
| `/checkout` | Finalização de compra |
| `/meus-cartoes` | Gerenciamento de cartões salvos |
| `/clientes` | Listagem de clientes (Admin) |

## Funcionalidades

### Sistema de Autenticação
- Cadastro de novos usuários com validação
- Login com email e senha
- Proteção de rotas privadas
- Persistência de sessão

### Catálogo de Cursos
- Listagem de cursos com informações detalhadas
- Filtros por categoria, nível e preço
- Busca por texto
- Cursos gratuitos e pagos
- Informações de avaliação e número de alunos

### Sistema de Pagamento
- Checkout seguro
- Salvamento de cartões
- Validação de dados do cartão
- Gerenciamento de métodos de pagamento

### Interface
- Design responsivo para todos os dispositivos
- Modo claro e escuro
- Animações e transições suaves
- Notificações toast
- Acessibilidade (WCAG)

## Screenshots / Demonstração

> Para visualizar a aplicação em funcionamento, execute o projeto localmente seguindo as instruções de instalação.

## Autores e Contato
### Desenvolvedores
- **João Victor Veronesi** - Desenvolvedor Front End 
  - GitHub: [@Veronesi30](https://github.com/Veronesi30)
  - LinkedIn: [João Victor Veronesi](https://www.linkedin.com/in/jo%C3%A3o-victor-veronesi-734897276/)

- **Leonardo Herrera Sabbatini** - Desenvolvedor Back End  
  - GitHub: [@LeoSabbatini](https://github.com/LeoSabbatini)
  - LinkedIn: [Leonardo Sabbatini](https://www.linkedin.com/in/devsabbatini/)

- **Rafael de Freitas Moraes** - Desenvolvedor Front End
  - GitHub: [@devfreitas](https://github.com/devfreitas)
  - LinkedIn: [Rafael Freitas](https://www.linkedin.com/in/rafael-freitas-9345492b5/)

### Instituição
**FIAP - Faculdade de Informática e Administração Paulista**  
Curso: Análise e Desenvolvimento de Sistemas   
Equipe: **404-Not-Founders** - Turma: **1TDSPI**

## Links
- **Repositório:** https://github.com/devfreitas/gs2-front
- **Vídeo:** https://youtu.be/BwtfrZuz4NY
- **Vercel** https://global2-front-n8or.vercel.app/

### Reportar Problemas

Encontrou um bug ou tem uma sugestão? Abra uma issue no repositório:
- [Reportar Bug](https://github.com/Not-Founders/gs-front/issues)
- [Solicitar Feature](https://github.com/Not-Founders/gs-front/issues)


### Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

Desenvolvido pela equipe Not-Founders | © 2025 Todos os direitos reservados.





