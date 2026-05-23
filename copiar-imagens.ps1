# =====================================================
# Script para copiar as imagens para o projeto
# Execute este arquivo clicando com botão direito
# e selecionando "Executar com PowerShell"
# =====================================================

$origem = "C:\Users\moarc\.gemini\antigravity\brain\44ae6289-85e2-43a8-95e1-3681572264c6"
$destino = "$PSScriptRoot\images"

# Garante que a pasta images existe
if (-not (Test-Path $destino)) {
    New-Item -ItemType Directory -Path $destino | Out-Null
}

# Logo ícone (sem texto) → logo-icon.png
$logoIcon = Join-Path $origem "media__1779495859279.jpg"
if (Test-Path $logoIcon) {
    Copy-Item -Path $logoIcon -Destination (Join-Path $destino "logo-icon.png") -Force
    Write-Host "✅ logo-icon.png copiado!" -ForegroundColor Green
} else {
    Write-Host "❌ Arquivo de logo ícone não encontrado." -ForegroundColor Red
}

# Foto do profissional → joao-queiroz.jpg
$fotoJoao = Join-Path $origem "media__1779495859356.png"
if (Test-Path $fotoJoao) {
    Copy-Item -Path $fotoJoao -Destination (Join-Path $destino "joao-queiroz.jpg") -Force
    Write-Host "✅ joao-queiroz.jpg copiado!" -ForegroundColor Green
} else {
    Write-Host "❌ Arquivo de foto não encontrado." -ForegroundColor Red
}

# Logo completa (com texto) → logo-full.png
$logoFull = Join-Path $origem "media__1779495859651.png"
if (Test-Path $logoFull) {
    Copy-Item -Path $logoFull -Destination (Join-Path $destino "logo-full.png") -Force
    Write-Host "✅ logo-full.png copiado!" -ForegroundColor Green
} else {
    Write-Host "❌ Arquivo de logo completa não encontrado." -ForegroundColor Red
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host " Imagens prontas! O site está pronto para uso." -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Lembre-se de atualizar o número de WhatsApp no index.html" -ForegroundColor Yellow
Write-Host "Substitua: 5571999999999" -ForegroundColor Yellow
Write-Host "Pelo seu número real (somente números, com DDI 55)" -ForegroundColor Yellow
Write-Host ""

Read-Host "Pressione Enter para fechar"
