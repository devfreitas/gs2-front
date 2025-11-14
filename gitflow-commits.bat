@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo ========================================
echo    GITFLOW + COMMITS - SKILLHUB
echo ========================================
echo.

REM Salvar configuração git atual
for /f "tokens=*" %%a in ('git config user.name 2^>nul') do set ORIGINAL_NAME=%%a
for /f "tokens=*" %%a in ('git config user.email 2^>nul') do set ORIGINAL_EMAIL=%%a

:MENU_PRINCIPAL
cls
echo ========================================
echo    GITFLOW + COMMITS - SKILLHUB
echo ========================================
echo.
echo [1] Criar e fazer commit em feature
echo [2] Criar e fazer commit em bugfix
echo [3] Fazer commit na branch atual
echo [4] Merge de branch
echo [5] Criar release
echo [6] Criar tag
echo [7] Push para GitHub
echo [8] Ver estatísticas
echo [9] Restaurar configuração git
echo [0] Sair
echo.
set /p OPCAO="Digite a opção: "

if "%OPCAO%"=="1" goto FEATURE
if "%OPCAO%"=="2" goto BUGFIX
if "%OPCAO%"=="3" goto COMMIT_ATUAL
if "%OPCAO%"=="4" goto MERGE
if "%OPCAO%"=="5" goto RELEASE
if "%OPCAO%"=="6" goto TAG
if "%OPCAO%"=="7" goto PUSH
if "%OPCAO%"=="8" goto STATS
if "%OPCAO%"=="9" goto RESTAURAR
if "%OPCAO%"=="0" goto FIM
echo Opção inválida!
pause
goto MENU_PRINCIPAL

:FEATURE
echo.
echo === CRIAR FEATURE ===
echo.
set /p FEATURE_NAME="Nome da feature (ex: nova-funcionalidade): "
if "%FEATURE_NAME%"=="" (
    echo Nome não pode ser vazio!
    pause
    goto MENU_PRINCIPAL
)

git checkout develop
git checkout -b feature/%FEATURE_NAME%
echo.
echo ✓ Branch feature/%FEATURE_NAME% criada!
echo.
goto ESCOLHER_AUTOR

:BUGFIX
echo.
echo === CRIAR BUGFIX ===
echo.
set /p BUGFIX_NAME="Nome do bugfix (ex: correcao-erro): "
if "%BUGFIX_NAME%"=="" (
    echo Nome não pode ser vazio!
    pause
    goto MENU_PRINCIPAL
)

git checkout develop
git checkout -b bugfix/%BUGFIX_NAME%
echo.
echo ✓ Branch bugfix/%BUGFIX_NAME% criada!
echo.
goto ESCOLHER_AUTOR

:COMMIT_ATUAL
echo.
echo === COMMIT NA BRANCH ATUAL ===
echo.
for /f "tokens=*" %%a in ('git branch --show-current') do set CURRENT_BRANCH=%%a
echo Branch atual: %CURRENT_BRANCH%
echo.
goto ESCOLHER_AUTOR

:ESCOLHER_AUTOR
echo Escolha o autor do commit:
echo.
echo [1] Leonardo Sabbatini
echo [2] João Veronesi
echo [3] Rafael Freitas
echo [0] Voltar
echo.
set /p AUTOR="Digite a opção: "

if "%AUTOR%"=="1" (
    git config user.name "Leonardo Sabbatini"
    git config user.email "leonardoherrerasabbatini@gmail.com"
    echo ✓ Autor: Leonardo Sabbatini
) else if "%AUTOR%"=="2" (
    git config user.name "João Veronesi"
    git config user.email "jvveronesi30@gmail.com"
    echo ✓ Autor: João Veronesi
) else if "%AUTOR%"=="3" (
    git config user.name "Rafael Freitas"
    git config user.email "freitassrafa2006@gmail.com"
    echo ✓ Autor: Rafael Freitas
) else if "%AUTOR%"=="0" (
    goto MENU_PRINCIPAL
) else (
    echo Opção inválida!
    goto ESCOLHER_AUTOR
)

echo.
goto FAZER_COMMIT

:FAZER_COMMIT
echo === CRIAR COMMIT ===
echo.
echo Arquivos modificados:
git status -s
echo.

set /p ADD_ALL="Adicionar todos os arquivos? (S/N): "
if /i "%ADD_ALL%"=="S" (
    git add .
    echo ✓ Todos os arquivos adicionados
) else (
    set /p ARQUIVO="Digite o caminho do arquivo (ou . para todos): "
    git add !ARQUIVO!
)

echo.
echo Tipos de commit:
echo   feat: Nova funcionalidade
echo   fix: Correção de bug
echo   docs: Documentação
echo   style: Formatação
echo   refactor: Refatoração
echo   test: Testes
echo   chore: Manutenção
echo.

set /p TIPO="Tipo do commit (feat/fix/docs/etc): "
set /p DESCRICAO="Descrição do commit: "

if "%TIPO%"=="" set TIPO=chore
if "%DESCRICAO%"=="" (
    echo Descrição não pode ser vazia!
    goto FAZER_COMMIT
)

git commit -m "%TIPO%: %DESCRICAO%"

if errorlevel 1 (
    echo ✗ Erro ao criar commit!
) else (
    echo ✓ Commit criado com sucesso!
)

echo.
set /p CONTINUAR="Fazer outro commit? (S/N): "
if /i "%CONTINUAR%"=="S" goto ESCOLHER_AUTOR

set /p VOLTAR_DEVELOP="Voltar para develop? (S/N): "
if /i "%VOLTAR_DEVELOP%"=="S" git checkout develop

pause
goto MENU_PRINCIPAL

:MERGE
echo.
echo === MERGE DE BRANCH ===
echo.
echo Branches disponíveis:
git branch
echo.
set /p BRANCH_ORIGEM="Branch de origem (ex: feature/nova-funcionalidade): "
set /p BRANCH_DESTINO="Branch de destino (ex: develop): "

if "%BRANCH_ORIGEM%"=="" (
    echo Branch de origem não pode ser vazia!
    pause
    goto MENU_PRINCIPAL
)
if "%BRANCH_DESTINO%"=="" set BRANCH_DESTINO=develop

git checkout %BRANCH_DESTINO%
git merge --no-ff %BRANCH_ORIGEM% -m "Merge %BRANCH_ORIGEM% into %BRANCH_DESTINO%"

if errorlevel 1 (
    echo ✗ Erro ao fazer merge!
) else (
    echo ✓ Merge realizado com sucesso!
)

pause
goto MENU_PRINCIPAL

:RELEASE
echo.
echo === CRIAR RELEASE ===
echo.
set /p VERSION="Versão da release (ex: 1.0.0): "
if "%VERSION%"=="" (
    echo Versão não pode ser vazia!
    pause
    goto MENU_PRINCIPAL
)

git checkout develop
git checkout -b release/%VERSION%

echo.
echo Atualizando package.json...
powershell -Command "$json = Get-Content 'package.json' | ConvertFrom-Json; $json.version = '%VERSION%'; $json | ConvertTo-Json -Depth 10 | Set-Content 'package.json'"

git add package.json
git commit -m "chore: bump version to %VERSION%"

echo.
echo ✓ Release %VERSION% criada!
echo.
echo Próximos passos:
echo 1. Fazer merge para main: git checkout main ^&^& git merge --no-ff release/%VERSION%
echo 2. Criar tag: git tag -a v%VERSION% -m "Release version %VERSION%"
echo 3. Fazer merge para develop: git checkout develop ^&^& git merge --no-ff release/%VERSION%
echo.

pause
goto MENU_PRINCIPAL

:TAG
echo.
echo === CRIAR TAG ===
echo.
set /p TAG_NAME="Nome da tag (ex: v1.0.0): "
set /p TAG_MSG="Mensagem da tag: "

if "%TAG_NAME%"=="" (
    echo Nome da tag não pode ser vazio!
    pause
    goto MENU_PRINCIPAL
)
if "%TAG_MSG%"=="" set TAG_MSG=Release %TAG_NAME%

git tag -a %TAG_NAME% -m "%TAG_MSG%"

if errorlevel 1 (
    echo ✗ Erro ao criar tag!
) else (
    echo ✓ Tag %TAG_NAME% criada com sucesso!
)

pause
goto MENU_PRINCIPAL

:PUSH
echo.
echo === PUSH PARA GITHUB ===
echo.
echo [1] Push da branch atual
echo [2] Push de todas as branches
echo [3] Push de todas as tags
echo [4] Push completo (branches + tags)
echo [0] Voltar
echo.
set /p PUSH_OPCAO="Digite a opção: "

if "%PUSH_OPCAO%"=="1" (
    for /f "tokens=*" %%a in ('git branch --show-current') do set CURRENT_BRANCH=%%a
    git push origin !CURRENT_BRANCH!
) else if "%PUSH_OPCAO%"=="2" (
    git push origin --all
) else if "%PUSH_OPCAO%"=="3" (
    git push origin --tags
) else if "%PUSH_OPCAO%"=="4" (
    git push origin --all
    git push origin --tags
) else if "%PUSH_OPCAO%"=="0" (
    goto MENU_PRINCIPAL
) else (
    echo Opção inválida!
    pause
    goto PUSH
)

echo.
echo ✓ Push realizado!
pause
goto MENU_PRINCIPAL

:STATS
cls
echo ========================================
echo    ESTATÍSTICAS DO PROJETO
echo ========================================
echo.
echo === COMMITS POR AUTOR (SEM MERGES) ===
git shortlog -sn --all --no-merges
echo.
echo === TAGS CRIADAS ===
git tag -l
echo.
echo === BRANCH ATUAL ===
git branch --show-current
echo.
echo === BRANCHES LOCAIS ===
git branch
echo.
echo === ÚLTIMOS 10 COMMITS ===
git log --oneline -10
echo.
pause
goto MENU_PRINCIPAL

:RESTAURAR
echo.
echo === RESTAURAR CONFIGURAÇÃO GIT ===
echo.
if defined ORIGINAL_NAME (
    git config user.name "%ORIGINAL_NAME%"
    echo ✓ Nome restaurado: %ORIGINAL_NAME%
) else (
    echo Nenhuma configuração original encontrada
)
if defined ORIGINAL_EMAIL (
    git config user.email "%ORIGINAL_EMAIL%"
    echo ✓ Email restaurado: %ORIGINAL_EMAIL%
)
echo.
pause
goto MENU_PRINCIPAL

:FIM
echo.
echo === FINALIZANDO ===
echo.
echo Restaurando configuração original...
if defined ORIGINAL_NAME git config user.name "%ORIGINAL_NAME%"
if defined ORIGINAL_EMAIL git config user.email "%ORIGINAL_EMAIL%"
echo.
echo ✓ Script finalizado!
echo.
pause
exit
