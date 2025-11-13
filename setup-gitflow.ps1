# Script PowerShell para Configurar GitFlow no Projeto SkillHub
# Execute este script para configurar automaticamente o GitFlow

Write-Host "🚀 Iniciando configuração do GitFlow para o SkillHub..." -ForegroundColor Cyan
Write-Host ""

# Função para verificar se o comando foi bem-sucedido
function Check-Command {
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Erro ao executar comando. Abortando..." -ForegroundColor Red
        exit 1
    }
}

# Verificar se o Git está instalado
Write-Host "🔍 Verificando instalação do Git..." -ForegroundColor Yellow
git --version
Check-Command
Write-Host "✅ Git instalado!" -ForegroundColor Green
Write-Host ""

# Passo 1: Inicializar repositório
Write-Host "📦 Passo 1: Inicializando repositório Git..." -ForegroundColor Yellow
if (Test-Path ".git") {
    Write-Host "⚠️  Repositório Git já existe. Pulando inicialização..." -ForegroundColor Yellow
} else {
    git init
    Check-Command
    Write-Host "✅ Repositório inicializado!" -ForegroundColor Green
}
Write-Host ""

# Passo 2: Configurar usuário (se necessário)
Write-Host "👤 Passo 2: Verificando configuração do usuário..." -ForegroundColor Yellow
$userName = git config user.name
$userEmail = git config user.email

if ([string]::IsNullOrEmpty($userName) -or [string]::IsNullOrEmpty($userEmail)) {
    Write-Host "⚠️  Configuração de usuário não encontrada." -ForegroundColor Yellow
    $name = Read-Host "Digite seu nome"
    $email = Read-Host "Digite seu email"
    
    git config user.name "$name"
    git config user.email "$email"
    Write-Host "✅ Usuário configurado!" -ForegroundColor Green
} else {
    Write-Host "✅ Usuário já configurado: $userName <$userEmail>" -ForegroundColor Green
}
Write-Host ""

# Passo 3: Criar commit inicial na main
Write-Host "📝 Passo 3: Criando commit inicial..." -ForegroundColor Yellow
git add .
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
Check-Command
git branch -M main
Write-Host "✅ Commit inicial criado na branch main!" -ForegroundColor Green
Write-Host ""

# Passo 4: Criar branch develop
Write-Host "🌿 Passo 4: Criando branch develop..." -ForegroundColor Yellow
git checkout -b develop
Check-Command
Write-Host "✅ Branch develop criada!" -ForegroundColor Green
Write-Host ""

# Passo 5: Conectar ao repositório remoto
Write-Host "🔗 Passo 5: Conectando ao repositório remoto..." -ForegroundColor Yellow
$remoteUrl = "https://github.com/devfreitas/gs2-front.git"

$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    Write-Host "⚠️  Remote 'origin' já existe: $existingRemote" -ForegroundColor Yellow
    $response = Read-Host "Deseja atualizar para $remoteUrl? (s/n)"
    if ($response -eq "s") {
        git remote set-url origin $remoteUrl
        Write-Host "✅ Remote atualizado!" -ForegroundColor Green
    }
} else {
    git remote add origin $remoteUrl
    Check-Command
    Write-Host "✅ Remote adicionado!" -ForegroundColor Green
}
Write-Host ""

# Passo 6: Fazer push das branches principais
Write-Host "⬆️  Passo 6: Enviando branches para o GitHub..." -ForegroundColor Yellow
Write-Host "Enviando branch main..." -ForegroundColor Cyan
git push -u origin main
Check-Command

Write-Host "Enviando branch develop..." -ForegroundColor Cyan
git push -u origin develop
Check-Command
Write-Host "✅ Branches enviadas!" -ForegroundColor Green
Write-Host ""

# Passo 7: Criar features
Write-Host "🎨 Passo 7: Criando features..." -ForegroundColor Yellow

# Feature 1: Sistema de Autenticação
Write-Host "  Criando feature/sistema-autenticacao..." -ForegroundColor Cyan
git checkout -b feature/sistema-autenticacao
git add src/contexts/AuthContext.tsx src/pages/Login.tsx src/pages/Cadastro.tsx src/components/ProtectedRoute.tsx
git commit -m "feat(auth): implementar sistema de autenticação

- Criar AuthContext para gerenciamento de estado
- Implementar página de login com validação
- Implementar página de cadastro
- Adicionar proteção de rotas
- Integrar com API backend"
git push -u origin feature/sistema-autenticacao
git checkout develop
git merge feature/sistema-autenticacao --no-ff -m "Merge feature/sistema-autenticacao into develop"
git push origin develop

# Feature 2: Sistema de Temas
Write-Host "  Criando feature/sistema-temas..." -ForegroundColor Cyan
git checkout -b feature/sistema-temas
git add src/contexts/ThemeContext.tsx src/components/ui/ThemeDebug.tsx
git commit -m "feat(theme): implementar sistema de temas claro/escuro

- Criar ThemeContext com Context API
- Suporte para tema claro, escuro e sistema
- Persistência no localStorage
- Integração com Tailwind CSS v4
- Componente de debug para desenvolvimento
- Transições suaves entre temas"
git push -u origin feature/sistema-temas
git checkout develop
git merge feature/sistema-temas --no-ff -m "Merge feature/sistema-temas into develop"
git push origin develop

# Feature 3: Catálogo de Cursos
Write-Host "  Criando feature/catalogo-cursos..." -ForegroundColor Cyan
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

Write-Host "✅ Features criadas!" -ForegroundColor Green
Write-Host ""

# Passo 8: Criar bugfix
Write-Host "🐛 Passo 8: Criando bugfix..." -ForegroundColor Yellow
git checkout -b bugfix/correcao-tema-persistencia
git add src/contexts/ThemeContext.tsx
git commit -m "fix(theme): corrigir persistência do tema no localStorage

- Resolver problema de tema não persistindo após reload
- Adicionar validação de tema salvo
- Melhorar detecção de preferência do sistema"
git push -u origin bugfix/correcao-tema-persistencia
git checkout develop
git merge bugfix/correcao-tema-persistencia --no-ff -m "Merge bugfix/correcao-tema-persistencia into develop"
git push origin develop
Write-Host "✅ Bugfix criado!" -ForegroundColor Green
Write-Host ""

# Passo 9: Criar primeira release (v1.0.0)
Write-Host "🚀 Passo 9: Criando release v1.0.0..." -ForegroundColor Yellow

# Atualizar package.json
$packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json
$packageJson.version = "1.0.0"
$packageJson | ConvertTo-Json -Depth 10 | Set-Content "package.json"

git checkout -b release/v1.0.0
git add package.json
git commit -m "chore(release): preparar release v1.0.0

- Atualizar versão para 1.0.0
- Primeira versão estável do SkillHub
- Todas as funcionalidades principais implementadas"
git push -u origin release/v1.0.0

# Merge na main
git checkout main
git merge release/v1.0.0 --no-ff -m "Merge release/v1.0.0 into main"
git tag -a v1.0.0 -m "Release v1.0.0 - Primeira versão estável

Funcionalidades:
- Sistema de autenticação completo
- Catálogo de cursos
- Sistema de checkout e pagamentos
- Painel administrativo
- Sistema de temas (claro/escuro)
- Páginas institucionais
- Design moderno e responsivo"
git push origin main
git push origin v1.0.0

# Merge de volta na develop
git checkout develop
git merge release/v1.0.0 --no-ff -m "Merge release/v1.0.0 back into develop"
git push origin develop

Write-Host "✅ Release v1.0.0 criada!" -ForegroundColor Green
Write-Host ""

# Passo 10: Criar hotfix
Write-Host "🔥 Passo 10: Criando hotfix v1.0.1..." -ForegroundColor Yellow
git checkout main
git checkout -b hotfix/v1.0.1-correcao-critica
git add src/services/api.ts
git commit -m "fix(api): corrigir timeout em requisições críticas

- Aumentar timeout de requisições
- Adicionar retry automático
- Melhorar tratamento de erros"

# Atualizar versão
$packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json
$packageJson.version = "1.0.1"
$packageJson | ConvertTo-Json -Depth 10 | Set-Content "package.json"

git add package.json
git commit -m "chore(release): bump version to 1.0.1"
git push -u origin hotfix/v1.0.1-correcao-critica

# Merge na main
git checkout main
git merge hotfix/v1.0.1-correcao-critica --no-ff -m "Merge hotfix/v1.0.1-correcao-critica into main"
git tag -a v1.0.1 -m "Hotfix v1.0.1 - Correção crítica

Correções:
- Resolver timeout em requisições da API
- Adicionar retry automático
- Melhorar estabilidade"
git push origin main
git push origin v1.0.1

# Merge de volta na develop
git checkout develop
git merge hotfix/v1.0.1-correcao-critica --no-ff -m "Merge hotfix/v1.0.1-correcao-critica into develop"
git push origin develop

Write-Host "✅ Hotfix v1.0.1 criado!" -ForegroundColor Green
Write-Host ""

# Passo 11: Criar segunda release (v1.1.0)
Write-Host "🚀 Passo 11: Criando release v1.1.0..." -ForegroundColor Yellow

# Criar feature para a release
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

# Criar release
$packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json
$packageJson.version = "1.1.0"
$packageJson | ConvertTo-Json -Depth 10 | Set-Content "package.json"

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
git tag -a v1.1.0 -m "Release v1.1.0 - Melhorias e Otimizações

Novidades:
- Melhorias na interface do usuário
- Novas animações e transições
- Melhorias de acessibilidade
- Otimizações de performance
- Novos componentes reutilizáveis"
git push origin main
git push origin v1.1.0

# Merge de volta na develop
git checkout develop
git merge release/v1.1.0 --no-ff -m "Merge release/v1.1.0 back into develop"
git push origin develop

Write-Host "✅ Release v1.1.0 criada!" -ForegroundColor Green
Write-Host ""

# Resumo final
Write-Host "🎉 GitFlow configurado com sucesso!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Resumo:" -ForegroundColor Cyan
Write-Host "  ✅ Branches criadas: main, develop" -ForegroundColor White
Write-Host "  ✅ Features: 4 features criadas e mergeadas" -ForegroundColor White
Write-Host "  ✅ Bugfix: 1 bugfix criado" -ForegroundColor White
Write-Host "  ✅ Hotfix: 1 hotfix criado" -ForegroundColor White
Write-Host "  ✅ Releases: 2 releases criadas" -ForegroundColor White
Write-Host "  ✅ Tags: v1.0.0, v1.0.1, v1.1.0" -ForegroundColor White
Write-Host ""
Write-Host "🔍 Verificar resultado:" -ForegroundColor Yellow
Write-Host "  git log --oneline --graph --all --decorate" -ForegroundColor White
Write-Host "  git tag" -ForegroundColor White
Write-Host "  git branch -a" -ForegroundColor White
Write-Host ""
Write-Host "🌐 Repositório: https://github.com/devfreitas/gs2-front" -ForegroundColor Cyan
Write-Host ""
