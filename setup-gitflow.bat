@echo off
REM Script CMD para Configurar GitFlow no Projeto SkillHub
REM Execute este script para configurar automaticamente o GitFlow

echo ========================================
echo   GitFlow Setup - SkillHub
echo ========================================
echo.

REM Verificar se o Git esta instalado
echo [1/11] Verificando instalacao do Git...
git --version
if errorlevel 1 (
    echo ERRO: Git nao encontrado. Instale o Git primeiro.
    pause
    exit /b 1
)
echo OK: Git instalado!
echo.

REM Inicializar repositorio
echo [2/11] Inicializando repositorio Git...
if exist .git (
    echo AVISO: Repositorio Git ja existe. Pulando...
) else (
    git init
    if errorlevel 1 goto :error
    echo OK: Repositorio inicializado!
)
echo.

REM Criar commit inicial
echo [3/11] Criando commit inicial...
git add .
git commit -m "chore: initial commit - estrutura base do projeto SkillHub"
if errorlevel 1 goto :error
git branch -M main
echo OK: Commit inicial criado!
echo.

REM Criar branch develop
echo [4/11] Criando branch develop...
git checkout -b develop
if errorlevel 1 goto :error
echo OK: Branch develop criada!
echo.

REM Conectar ao repositorio remoto
echo [5/11] Conectando ao repositorio remoto...
git remote add origin https://github.com/devfreitas/gs2-front.git
echo OK: Remote adicionado!
echo.

REM Push das branches principais
echo [6/11] Enviando branches para o GitHub...
echo Enviando main...
git checkout main
git push -u origin main
if errorlevel 1 goto :error

echo Enviando develop...
git checkout develop
git push -u origin develop
if errorlevel 1 goto :error
echo OK: Branches enviadas!
echo.

REM Criar features
echo [7/11] Criando features...

echo   - feature/sistema-autenticacao
git checkout -b feature/sistema-autenticacao
git add src/contexts/AuthContext.tsx src/pages/Login.tsx src/pages/Cadastro.tsx
git commit -m "feat(auth): implementar sistema de autenticacao"
git push -u origin feature/sistema-autenticacao
git checkout develop
git merge feature/sistema-autenticacao --no-ff -m "Merge feature/sistema-autenticacao into develop"
git push origin develop

echo   - feature/sistema-temas
git checkout -b feature/sistema-temas
git add src/contexts/ThemeContext.tsx
git commit -m "feat(theme): implementar sistema de temas claro/escuro"
git push -u origin feature/sistema-temas
git checkout develop
git merge feature/sistema-temas --no-ff -m "Merge feature/sistema-temas into develop"
git push origin develop

echo   - feature/catalogo-cursos
git checkout -b feature/catalogo-cursos
git add src/pages/Cursos.tsx src/services/cursoService.ts
git commit -m "feat(courses): implementar catalogo de cursos"
git push -u origin feature/catalogo-cursos
git checkout develop
git merge feature/catalogo-cursos --no-ff -m "Merge feature/catalogo-cursos into develop"
git push origin develop

echo OK: Features criadas!
echo.

REM Criar bugfix
echo [8/11] Criando bugfix...
git checkout -b bugfix/correcao-tema-persistencia
git add src/contexts/ThemeContext.tsx
git commit -m "fix(theme): corrigir persistencia do tema no localStorage"
git push -u origin bugfix/correcao-tema-persistencia
git checkout develop
git merge bugfix/correcao-tema-persistencia --no-ff -m "Merge bugfix/correcao-tema-persistencia into develop"
git push origin develop
echo OK: Bugfix criado!
echo.

REM Criar primeira release
echo [9/11] Criando release v1.0.0...
git checkout -b release/v1.0.0
git add package.json
git commit -m "chore(release): preparar release v1.0.0"
git push -u origin release/v1.0.0

git checkout main
git merge release/v1.0.0 --no-ff -m "Merge release/v1.0.0 into main"
git tag -a v1.0.0 -m "Release v1.0.0 - Primeira versao estavel"
git push origin main
git push origin v1.0.0

git checkout develop
git merge release/v1.0.0 --no-ff -m "Merge release/v1.0.0 back into develop"
git push origin develop
echo OK: Release v1.0.0 criada!
echo.

REM Criar hotfix
echo [10/11] Criando hotfix v1.0.1...
git checkout main
git checkout -b hotfix/v1.0.1-correcao-critica
git add src/services/api.ts
git commit -m "fix(api): corrigir timeout em requisicoes criticas"
git add package.json
git commit -m "chore(release): bump version to 1.0.1"
git push -u origin hotfix/v1.0.1-correcao-critica

git checkout main
git merge hotfix/v1.0.1-correcao-critica --no-ff -m "Merge hotfix/v1.0.1-correcao-critica into main"
git tag -a v1.0.1 -m "Hotfix v1.0.1 - Correcao critica"
git push origin main
git push origin v1.0.1

git checkout develop
git merge hotfix/v1.0.1-correcao-critica --no-ff -m "Merge hotfix/v1.0.1-correcao-critica into develop"
git push origin develop
echo OK: Hotfix v1.0.1 criado!
echo.

REM Criar segunda release
echo [11/11] Criando release v1.1.0...
git checkout -b feature/melhorias-ui
git add src/components/
git commit -m "feat(ui): adicionar melhorias na interface"
git push -u origin feature/melhorias-ui
git checkout develop
git merge feature/melhorias-ui --no-ff -m "Merge feature/melhorias-ui into develop"
git push origin develop

git checkout -b release/v1.1.0
git add package.json
git commit -m "chore(release): preparar release v1.1.0"
git push -u origin release/v1.1.0

git checkout main
git merge release/v1.1.0 --no-ff -m "Merge release/v1.1.0 into main"
git tag -a v1.1.0 -m "Release v1.1.0 - Melhorias e Otimizacoes"
git push origin main
git push origin v1.1.0

git checkout develop
git merge release/v1.1.0 --no-ff -m "Merge release/v1.1.0 back into develop"
git push origin develop
echo OK: Release v1.1.0 criada!
echo.

REM Resumo final
echo ========================================
echo   GitFlow configurado com sucesso!
echo ========================================
echo.
echo Resumo:
echo   - Branches: main, develop
echo   - Features: 4 criadas
echo   - Bugfix: 1 criado
echo   - Hotfix: 1 criado
echo   - Releases: 2 criadas
echo   - Tags: v1.0.0, v1.0.1, v1.1.0
echo.
echo Verificar resultado:
echo   git log --oneline --graph --all --decorate
echo   git tag
echo   git branch -a
echo.
echo Repositorio: https://github.com/devfreitas/gs2-front
echo.
pause
exit /b 0

:error
echo.
echo ERRO: Falha ao executar comando Git.
echo Verifique os erros acima e tente novamente.
pause
exit /b 1
