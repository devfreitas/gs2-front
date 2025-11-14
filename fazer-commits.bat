@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo ========================================
echo    SCRIPT DE COMMITS - SKILLHUB
echo ========================================
echo.

REM Salvar configuração git atual
for /f "tokens=*" %%a in ('git config user.name 2^>nul') do set ORIGINAL_NAME=%%a
for /f "tokens=*" %%a in ('git config user.email 2^>nul') do set ORIGINAL_EMAIL=%%a

:MENU
echo.
echo Escolha o autor do commit:
echo.
echo [1] Leonardo Sabbatini (leonardoherrerasabbatini@gmail.com)
echo [2] João Veronesi (jvveronesi30@gmail.com)
echo [3] Rafael Freitas (freitassrafa2006@gmail.com)
echo [4] Restaurar configuração original
echo [5] Ver estatísticas de commits
echo [0] Sair
echo.
set /p OPCAO="Digite a opção: "

if "%OPCAO%"=="1" goto LEONARDO
if "%OPCAO%"=="2" goto JOAO
if "%OPCAO%"=="3" goto RAFAEL
if "%OPCAO%"=="4" goto RESTAURAR
if "%OPCAO%"=="5" goto STATS
if "%OPCAO%"=="0" goto FIM
echo Opção inválida!
goto MENU

:LEONARDO
git config user.name "Leonardo Sabbatini"
git config user.email "leonardoherrerasabbatini@gmail.com"
echo.
echo ✓ Autor configurado: Leonardo Sabbatini
goto COMMIT

:JOAO
git config user.name "João Veronesi"
git config user.email "jvveronesi30@gmail.com"
echo.
echo ✓ Autor configurado: João Veronesi
goto COMMIT

:RAFAEL
git config user.name "Rafael Freitas"
git config user.email "freitassrafa2006@gmail.com"
echo.
echo ✓ Autor configurado: Rafael Freitas
goto COMMIT

:COMMIT
echo.
echo Arquivos modificados:
git status -s
echo.
set /p MENSAGEM="Digite a mensagem do commit: "

if "%MENSAGEM%"=="" (
    echo Mensagem não pode ser vazia!
    goto MENU
)

echo.
echo Adicionando arquivos...
git add .

echo Criando commit...
git commit -m "%MENSAGEM%"

if errorlevel 1 (
    echo.
    echo ✗ Erro ao criar commit!
) else (
    echo.
    echo ✓ Commit criado com sucesso!
)

echo.
set /p CONTINUAR="Fazer outro commit? (S/N): "
if /i "%CONTINUAR%"=="S" goto MENU
goto FIM

:RESTAURAR
if defined ORIGINAL_NAME (
    git config user.name "%ORIGINAL_NAME%"
    echo ✓ Nome restaurado: %ORIGINAL_NAME%
)
if defined ORIGINAL_EMAIL (
    git config user.email "%ORIGINAL_EMAIL%"
    echo ✓ Email restaurado: %ORIGINAL_EMAIL%
)
echo.
pause
goto MENU

:STATS
echo.
echo ========================================
echo    ESTATÍSTICAS DE COMMITS
echo ========================================
echo.
echo Commits por autor (sem merges):
git shortlog -sn --all --no-merges
echo.
echo Tags criadas:
git tag -l
echo.
echo Branch atual:
git branch --show-current
echo.
pause
goto MENU

:FIM
echo.
echo Restaurando configuração original...
if defined ORIGINAL_NAME git config user.name "%ORIGINAL_NAME%"
if defined ORIGINAL_EMAIL git config user.email "%ORIGINAL_EMAIL%"
echo.
echo ✓ Script finalizado!
echo.
pause
