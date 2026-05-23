@echo off
echo Iniciando envio para o GitHub...

:: Adiciona todas as modificacoes (HTML, CSS, imagens e o README)
git init
git add .

:: Faz o commit inicial
git commit -m "Primeiro commit - Site JoaoFisio"

:: Define a branch principal como main
git branch -M main

:: Adiciona o repositorio remoto (ignora erro se ja existir)
git remote add origin https://github.com/moarcy/JoaoFisio.git

:: Envia os arquivos
echo Enviando arquivos...
git push -u origin main

echo.
echo ========================================================
echo Concluido! Verifique se houve algum erro acima.
echo ========================================================
pause
