@echo off
chcp 65001 >nul

REM Script super simples para commits rápidos

echo === COMMIT RÁPIDO ===
echo.

REM Verificar mudanças
git status -s | findstr /r "." >nul
if errorlevel 1 (
    echo Nenhuma mudança para commitar!
    pause
    exit
)

echo Arquivos modificados:
git status -s
echo.

REM Autor
echo [1] Leonardo  [2] João  [3] Rafael
set /p A="Autor: "

if "%A%"=="1" (
    git config user.name "Leonardo Sabbatini"
    git config user.email "leonardoherrerasabbatini@gmail.com"
) else if "%A%"=="2" (
    git config user.name "João Veronesi"
    git config user.email "jvveronesi30@gmail.com"
) else if "%A%"=="3" (
    git config user.name "Rafael Freitas"
    git config user.email "freitassrafa2006@gmail.com"
) else (
    echo Opção inválida!
    pause
    exit
)

REM Mensagem
echo.
set /p M="Mensagem: "
if "%M%"=="" (
    echo Mensagem vazia!
    pause
    exit
)

REM Commit
git add .
git commit -m "%M%"

if errorlevel 1 (
    echo Erro!
    pause
    exit
)

echo.
echo ✓ Commit criado!
echo.

REM Push opcional
set /p P="Push? (S/N): "
if /i "%P%"=="S" (
    for /f "tokens=*" %%a in ('git branch --show-current') do git push origin %%a
    echo ✓ Push feito!
)

pause
