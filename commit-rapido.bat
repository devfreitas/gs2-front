@echo off
chcp 65001 >nul

echo ========================================
echo    COMMIT RÁPIDO - SKILLHUB
echo ========================================
echo.

REM Verificar se há mudanças
git status -s | findstr /r "." >nul
if errorlevel 1 (
    echo Nenhuma mudança para commitar!
    pause
    exit
)

echo Arquivos modificados:
git status -s
echo.

REM Escolher autor
echo Autor do commit:
echo [1] Leonardo Sabbatini
echo [2] João Veronesi
echo [3] Rafael Freitas
echo.
set /p AUTOR="Escolha (1-3): "

if "%AUTOR%"=="1" (
    git config user.name "Leonardo Sabbatini"
    git config user.email "leonardoherrerasabbatini@gmail.com"
    echo ✓ Leonardo Sabbatini
) else if "%AUTOR%"=="2" (
    git config user.name "João Veronesi"
    git config user.email "jvveronesi30@gmail.com"
    echo ✓ João Veronesi
) else if "%AUTOR%"=="3" (
    git config user.name "Rafael Freitas"
    git config user.email "freitassrafa2006@gmail.com"
    echo ✓ Rafael Freitas
) else (
    echo Opção inválida!
    pause
    exit
)

echo.

REM Tipo de commit
echo Tipo de commit:
echo [1] feat - Nova funcionalidade
echo [2] fix - Correção de bug
echo [3] docs - Documentação
echo [4] style - Formatação/estilo
echo [5] refactor - Refatoração
echo [6] test - Testes
echo [7] chore - Manutenção
echo.
set /p TIPO_NUM="Escolha (1-7): "

if "%TIPO_NUM%"=="1" set TIPO=feat
if "%TIPO_NUM%"=="2" set TIPO=fix
if "%TIPO_NUM%"=="3" set TIPO=docs
if "%TIPO_NUM%"=="4" set TIPO=style
if "%TIPO_NUM%"=="5" set TIPO=refactor
if "%TIPO_NUM%"=="6" set TIPO=test
if "%TIPO_NUM%"=="7" set TIPO=chore

if "%TIPO%"=="" (
    echo Opção inválida!
    pause
    exit
)

echo.
set /p MSG="Descrição do commit: "

if "%MSG%"=="" (
    echo Descrição não pode ser vazia!
    pause
    exit
)

REM Fazer commit
echo.
echo Adicionando arquivos...
git add .

echo Criando commit...
git commit -m "%TIPO%: %MSG%"

if errorlevel 1 (
    echo.
    echo ✗ Erro ao criar commit!
    pause
    exit
)

echo.
echo ✓ Commit criado com sucesso!
echo.

REM Perguntar se quer fazer push
set /p PUSH="Fazer push para GitHub? (S/N): "
if /i "%PUSH%"=="S" (
    for /f "tokens=*" %%a in ('git branch --show-current') do set BRANCH=%%a
    echo Fazendo push da branch !BRANCH!...
    git push origin !BRANCH!
    echo ✓ Push realizado!
)

echo.
pause
