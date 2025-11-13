# 📚 Guia Completo de Implementação do GitFlow - SkillHub

## 🎯 Objetivo

Este guia fornece todos os comandos necessários para implementar o GitFlow corretamente no projeto SkillHub, incluindo:
- ✅ Estrutura de branches padrão (main, develop)
- ✅ Prefixos corretos (feature/, bugfix/, release/, hotfix/)
- ✅ Pelo menos 2 tags de versão
- ✅ Histórico de commits organizado
- ✅ Integração com GitHub

---

## 📋 Pré-requisitos

- Git instalado (versão 2.0 ou superior)
- Conta no GitHub
- Repositório criado: https://github.com/devfreitas/gs2-front

---

## 🚀 Passo 1: Inicializar o Repositório Git

```bash
# Inicializar o repositório Git
git init

# Verificar status
git status
```

---

## 🔧 Passo 2: Configurar o Git (se ainda não configurado)

```bash
# Configurar nome de usuário
git config --global user.name "Seu Nome"

# Configurar email
git config --global user.email "seu.email@exemplo.com"

# Verificar configurações
git config --list
```

---

## 📝 Passo 3: Criar o Commit Inicial na Branch Main

```bash
# Adicionar todos os arquivos
git add .

# Criar commit inicial
git commit -m "chore: initial commit - estrutura base do projeto SkillHub

- Configuração inicial do projeto React + TypeScript + Vite
- Implementação do sistema de autenticação
- Catálogo de cursos
- Sistema de checkout e pagamentos
- Painel administrativo
- Sistema de temas (claro/escuro)
- Design moderno com Tailwind CSS v4
- Estrutura de componentes e páginas
- Integração com API backend"

# Renomear branch para main (se necessário)
git branch -M main
```

---

## 🌿 Passo 4: Criar a Branch Develop

```bash
# Criar e mudar para a branch develop
git checkout -b develop

# Verificar em qual branch você está
git branch
```

---

## 🔗 Passo 5: Conectar ao Repositório Remoto no GitHub

```bash
# Adicionar o repositório remoto
git remote add origin https://github.com/devfreitas/gs2-front.git

# Verificar se foi adicionado corretamente
git remote -v

# Fazer push da branch main
git push -u origin main

# Fazer push da branch develop
git push -u origin develop
```

---

## 🎨 Passo 6: Criar Features (Exemplos de Desenvolvimento)

### Feature 1: Sistema de Autenticação

```bash
# Criar branch de feature a partir da develop
git checkout develop
git checkout -b feature/sistema-autenticacao

# Simular desenvolvimento (você já tem o código, então vamos criar commits organizados)
git add src/contexts/AuthContext.tsx src/pages/Login.tsx src/pages/Cadastro.tsx
git commit -m "feat(auth): implementar sistema de autenticação

- Criar AuthContext para gerenciamento de estado
- Implementar página de login com validação
- Implementar página de cadastro
- Adicionar proteção de rotas
- Integrar com API backend"

# Fazer push da feature
git push -u origin feature/sistema-autenticacao

# Voltar para develop e fazer merge
git checkout develop
git merge feature/sistema-autenticacao --no-ff -m "Merge feature/sistema-autenticacao into develop"
git push origin develop
```

### Feature 2: Sistema de Temas

```bash
# Criar nova feature
git checkout develop
git checkout -b feature/sistema-temas

# Adicionar arquivos relacionados ao tema
git add src/contexts/ThemeContext.tsx src/components/ui/ThemeDebug.tsx src/index.css
git commit -m "feat(theme): implementar sistema de temas claro/escuro

- Criar ThemeContext com Context API
- Suporte para tema claro, escuro e sistema
- Persistência no localStorage
- Integração com Tailwind CSS v4
- Componente de debug para desenvolvimento
- Transições suaves entre temas"

# Push e merge
git push -u origin feature/sistema-temas
git checkout develop
git merge feature/sistema-temas --no-ff -m "Merge feature/sistema-temas into develop"
git push origin develop
```

### Feature 3: Catálogo de Cursos

```bash
# Criar feature de cursos
git checkout develop
git checkout -b feature/catalogo-cursos

git add src/pages/Cursos.tsx src/services/cursoService.ts
git commit -m "feat(courses): implementar catálogo de cursos

- Criar página de listagem de cursos
- Implementar serviço de API para cursos
- Adicionar filtros e busca
- Cards de cursos com informações detalhadas
- Integração com backend"

git push -u origin feature/catalogo-cursos
git checkout develop
git merge feature/catalogo-cursos --no-ff -m "Merge feature/catalogo-cursos into develop"
git push origin develop
```

### Feature 4: Sistema de Checkout

```bash
# Criar feature de checkout
git checkout develop
git checkout -b feature/sistema-checkout

git add src/pages/Checkout.tsx src/pages/MeusCartoes.tsx src/services/cartaoService.ts
git commit -m "feat(checkout): implementar sistema de checkout e pagamentos

- Criar página de checkout
- Implementar gerenciamento de cartões
- Serviço de API para cartões
- Validação de dados de pagamento
- Fluxo completo de compra"

git push -u origin feature/sistema-checkout
git checkout develop
git merge feature/sistema-checkout --no-ff -m "Merge feature/sistema-checkout into develop"
git push origin develop
```

### Feature 5: Painel Administrativo

```bash
# Criar feature admin
git checkout develop
git checkout -b feature/painel-admin

git add src/pages/Admin.tsx src/pages/Clientes.tsx src/services/clienteService.ts
git commit -m "feat(admin): implementar painel administrativo

- Criar dashboard administrativo
- Gerenciamento de clientes
- Serviço de API para clientes
- Tabelas com dados dos clientes
- Funcionalidades CRUD completas"

git push -u origin feature/painel-admin
git checkout develop
git merge feature/painel-admin --no-ff -m "Merge feature/painel-admin into develop"
git push origin develop
```

### Feature 6: Páginas Institucionais

```bash
# Criar feature de páginas institucionais
git checkout develop
git checkout -b feature/paginas-institucionais

git add src/pages/LandingPage.tsx src/pages/Sobre.tsx src/pages/FAQ.tsx src/pages/Contato.tsx src/pages/Integrantes.tsx
git commit -m "feat(pages): implementar páginas institucionais

- Landing page moderna com hero section
- Página sobre a plataforma
- FAQ com perguntas frequentes
- Formulário de contato
- Página dos integrantes do projeto
- Design responsivo e animações"

git push -u origin feature/paginas-institucionais
git checkout develop
git merge feature/paginas-institucionais --no-ff -m "Merge feature/paginas-institucionais into develop"
git push origin develop
```

---

## 🐛 Passo 7: Criar um Bugfix (Exemplo)

```bash
# Criar branch de bugfix
git checkout develop
git checkout -b bugfix/correcao-tema-persistencia

# Simular correção de bug
git add src/contexts/ThemeContext.tsx
git commit -m "fix(theme): corrigir persistência do tema no localStorage

- Resolver problema de tema não persistindo após reload
- Adicionar validação de tema salvo
- Melhorar detecção de preferência do sistema"

# Push e merge
git push -u origin bugfix/correcao-tema-persistencia
git checkout develop
git merge bugfix/correcao-tema-persistencia --no-ff -m "Merge bugfix/correcao-tema-persistencia into develop"
git push origin develop
```

---

## 🚀 Passo 8: Criar a Primeira Release (v1.0.0)

```bash
# Atualizar versão no package.json primeiro
# Edite o arquivo package.json e mude "version": "0.0.0" para "version": "1.0.0"

# Criar branch de release
git checkout develop
git checkout -b release/v1.0.0

# Commit da atualização de versão
git add package.json
git commit -m "chore(release): preparar release v1.0.0

- Atualizar versão para 1.0.0
- Primeira versão estável do SkillHub
- Todas as funcionalidades principais implementadas"

# Push da release
git push -u origin release/v1.0.0

# Merge na main
git checkout main
git merge release/v1.0.0 --no-ff -m "Merge release/v1.0.0 into main"

# Criar tag
git tag -a v1.0.0 -m "Release v1.0.0 - Primeira versão estável

Funcionalidades:
- Sistema de autenticação completo
- Catálogo de cursos
- Sistema de checkout e pagamentos
- Painel administrativo
- Sistema de temas (claro/escuro)
- Páginas institucionais
- Design moderno e responsivo"

# Push da main e da tag
git push origin main
git push origin v1.0.0

# Merge de volta na develop
git checkout develop
git merge release/v1.0.0 --no-ff -m "Merge release/v1.0.0 back into develop"
git push origin develop

# Deletar branch de release (opcional)
git branch -d release/v1.0.0
git push origin --delete release/v1.0.0
```

---

## 🔥 Passo 9: Criar um Hotfix (Exemplo)

```bash
# Criar hotfix a partir da main
git checkout main
git checkout -b hotfix/v1.0.1-correcao-critica

# Simular correção crítica
git add src/services/api.ts
git commit -m "fix(api): corrigir timeout em requisições críticas

- Aumentar timeout de requisições
- Adicionar retry automático
- Melhorar tratamento de erros"

# Atualizar versão para 1.0.1
# Edite package.json: "version": "1.0.1"
git add package.json
git commit -m "chore(release): bump version to 1.0.1"

# Push do hotfix
git push -u origin hotfix/v1.0.1-correcao-critica

# Merge na main
git checkout main
git merge hotfix/v1.0.1-correcao-critica --no-ff -m "Merge hotfix/v1.0.1-correcao-critica into main"

# Criar tag
git tag -a v1.0.1 -m "Hotfix v1.0.1 - Correção crítica

Correções:
- Resolver timeout em requisições da API
- Adicionar retry automático
- Melhorar estabilidade"

# Push da main e tag
git push origin main
git push origin v1.0.1

# Merge de volta na develop
git checkout develop
git merge hotfix/v1.0.1-correcao-critica --no-ff -m "Merge hotfix/v1.0.1-correcao-critica into develop"
git push origin develop

# Deletar branch de hotfix (opcional)
git branch -d hotfix/v1.0.1-correcao-critica
git push origin --delete hotfix/v1.0.1-correcao-critica
```

---

## 🎯 Passo 10: Criar Segunda Release (v1.1.0)

```bash
# Criar nova feature para a próxima release
git checkout develop
git checkout -b feature/melhorias-ui

git add src/components/
git commit -m "feat(ui): adicionar melhorias na interface

- Novas animações
- Melhorias de acessibilidade
- Otimizações de performance
- Novos componentes reutilizáveis"

git push -u origin feature/melhorias-ui
git checkout develop
git merge feature/melhorias-ui --no-ff -m "Merge feature/melhorias-ui into develop"
git push origin develop

# Criar release v1.1.0
# Atualizar package.json para "version": "1.1.0"
git checkout develop
git checkout -b release/v1.1.0

git add package.json
git commit -m "chore(release): preparar release v1.1.0

- Atualizar versão para 1.1.0
- Melhorias de UI e UX
- Otimizações de performance"

git push -u origin release/v1.1.0

# Merge na main
git checkout main
git merge release/v1.1.0 --no-ff -m "Merge release/v1.1.0 into main"

# Criar tag
git tag -a v1.1.0 -m "Release v1.1.0 - Melhorias e Otimizações

Novidades:
- Melhorias na interface do usuário
- Novas animações e transições
- Melhorias de acessibilidade
- Otimizações de performance
- Novos componentes reutilizáveis"

# Push
git push origin main
git push origin v1.1.0

# Merge de volta na develop
git checkout develop
git merge release/v1.1.0 --no-ff -m "Merge release/v1.1.0 back into develop"
git push origin develop

# Deletar branch de release
git branch -d release/v1.1.0
git push origin --delete release/v1.1.0
```

---

## 📊 Passo 11: Verificar o Resultado

```bash
# Ver todas as branches
git branch -a

# Ver todas as tags
git tag

# Ver histórico de commits (gráfico)
git log --oneline --graph --all --decorate

# Ver detalhes de uma tag
git show v1.0.0
git show v1.1.0
```

---

## 🎨 Estrutura Final do GitFlow

```
main (produção)
├── v1.0.0 (tag)
├── v1.0.1 (tag)
└── v1.1.0 (tag)

develop (desenvolvimento)
├── feature/sistema-autenticacao
├── feature/sistema-temas
├── feature/catalogo-cursos
├── feature/sistema-checkout
├── feature/painel-admin
├── feature/paginas-institucionais
├── feature/melhorias-ui
├── bugfix/correcao-tema-persistencia
├── release/v1.0.0
├── release/v1.1.0
└── hotfix/v1.0.1-correcao-critica
```

---

## 📝 Convenção de Commits (Conventional Commits)

Use prefixos padronizados nos commits:

- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Documentação
- **style**: Formatação (não afeta código)
- **refactor**: Refatoração de código
- **test**: Adicionar/modificar testes
- **chore**: Tarefas de manutenção

### Exemplos:

```bash
git commit -m "feat(auth): adicionar login com Google"
git commit -m "fix(checkout): corrigir validação de cartão"
git commit -m "docs(readme): atualizar instruções de instalação"
git commit -m "style(header): ajustar espaçamento"
git commit -m "refactor(api): simplificar chamadas HTTP"
git commit -m "test(auth): adicionar testes unitários"
git commit -m "chore(deps): atualizar dependências"
```

---

## 🔍 Comandos Úteis

```bash
# Ver status atual
git status

# Ver diferenças
git diff

# Ver histórico
git log --oneline --graph --all

# Mudar de branch
git checkout nome-da-branch

# Criar e mudar para nova branch
git checkout -b nome-da-branch

# Listar branches
git branch -a

# Listar tags
git tag

# Deletar branch local
git branch -d nome-da-branch

# Deletar branch remota
git push origin --delete nome-da-branch

# Atualizar branch local com remota
git pull origin nome-da-branch

# Ver branches remotas
git remote show origin
```

---

## ✅ Checklist de Implementação

- [ ] Repositório Git inicializado
- [ ] Branch `main` criada
- [ ] Branch `develop` criada
- [ ] Pelo menos 3 features criadas com prefixo `feature/`
- [ ] Pelo menos 1 bugfix criado com prefixo `bugfix/`
- [ ] Pelo menos 1 hotfix criado com prefixo `hotfix/`
- [ ] Pelo menos 2 releases criadas com prefixo `release/`
- [ ] Pelo menos 2 tags criadas (v1.0.0, v1.1.0)
- [ ] Commits organizados e descritivos
- [ ] Histórico limpo e legível
- [ ] Repositório conectado ao GitHub
- [ ] Todas as branches enviadas para o remoto
- [ ] Todas as tags enviadas para o remoto

---

## 🎓 Boas Práticas

1. **Sempre trabalhe em branches separadas** - Nunca commite direto na main ou develop
2. **Use commits descritivos** - Explique o que foi feito e por quê
3. **Faça commits pequenos e frequentes** - Facilita o rastreamento de mudanças
4. **Teste antes de fazer merge** - Garanta que o código funciona
5. **Use merge --no-ff** - Mantém o histórico de branches
6. **Crie tags para releases** - Facilita o versionamento
7. **Documente mudanças importantes** - Atualize o README e CHANGELOG
8. **Sincronize regularmente** - Faça pull/push frequentemente

---

## 🚨 Problemas Comuns e Soluções

### Erro: "fatal: not a git repository"
```bash
# Solução: Inicialize o repositório
git init
```

### Erro: "failed to push some refs"
```bash
# Solução: Faça pull primeiro
git pull origin nome-da-branch --rebase
git push origin nome-da-branch
```

### Erro: "merge conflict"
```bash
# Solução: Resolva os conflitos manualmente
# 1. Abra os arquivos com conflito
# 2. Edite e resolva os conflitos
# 3. Adicione os arquivos resolvidos
git add arquivo-resolvido.txt
# 4. Complete o merge
git commit -m "resolve: conflitos resolvidos"
```

### Desfazer último commit (sem perder mudanças)
```bash
git reset --soft HEAD~1
```

### Desfazer último commit (perdendo mudanças)
```bash
git reset --hard HEAD~1
```

---

## 📚 Recursos Adicionais

- [Git Flow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

**Desenvolvido para o projeto SkillHub** 🚀
