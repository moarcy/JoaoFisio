# João Queiroz | Fisioterapia Ortopédica e Esportiva

Site profissional de João Queiroz, fisioterapeuta especializado em fisioterapia ortopédica e esportiva com atendimento domiciliar em Salvador - BA.

## 🚀 Tecnologias
- HTML5 semântico
- CSS3 Vanilla (custom properties, grid, flexbox, animações)
- JavaScript vanilla (sem dependências)
- Otimizado para SEO local (Salvador, BA)
- Pronto para deploy no **Vercel**

## 📁 Estrutura de arquivos

```
JoaoFisio/
├── index.html          # Página principal
├── style.css           # Estilos globais
├── main.js             # JavaScript (interatividade)
├── vercel.json         # Configuração de deploy
├── robots.txt          # Instruções para rastreadores
├── sitemap.xml         # Mapa do site para SEO
└── images/
    ├── logo-icon.png   # Logo ícone (círculo)
    ├── logo-full.png   # Logo completa (com texto)
    └── joao-queiroz.jpg # Foto do fisioterapeuta
```

## 🖼️ Imagens necessárias

Coloque os seguintes arquivos dentro da pasta `images/`:

| Arquivo | Descrição |
|---|---|
| `logo-icon.png` | Logo ícone (arquivo 1 enviado - fundo branco, símbolo colorido) |
| `logo-full.png` | Logo com texto "João Queiroz" (arquivo 3 enviado) |
| `joao-queiroz.jpg` | Foto do profissional (arquivo 2 enviado) |

## 📦 Deploy no Vercel

### Opção 1 — Arraste e solte (mais fácil)
1. Acesse [vercel.com](https://vercel.com)
2. Faça login ou crie uma conta
3. Clique em **"Add New Project"**
4. Arraste a pasta `JoaoFisio` inteira para a área de upload

### Opção 2 — Via GitHub
1. Crie um repositório no GitHub e envie os arquivos
2. Acesse [vercel.com](https://vercel.com) → **"Import Git Repository"**
3. Selecione o repositório e clique em **Deploy**

### Opção 3 — Via CLI
```bash
npm i -g vercel
cd JoaoFisio
vercel --prod
```

## 📞 WhatsApp
Antes do deploy, atualize o número de WhatsApp no `index.html`.
Busque e substitua `5571999999999` pelo número real (somente dígitos, com DDI 55 e DDD 71).

## 🎨 Paleta de Cores
| Cor | HSL | Uso |
|---|---|---|
| Verde-azulado | `hsl(168, 68%, 38%)` | Cor primária (teal) |
| Azul | `hsl(221, 74%, 40%)` | Cor secundária |
| Dark | `hsl(220, 20%, 8%)` | Fundo principal |

## 🔍 SEO Implementado
- Meta tags completas (título, descrição, keywords)
- Open Graph (Facebook/WhatsApp)
- Twitter Card
- Schema.org `MedicalBusiness` (dados estruturados)
- Canonical URL
- Semântica HTML5 (main, section, article, nav, header, footer)
- Atributos `aria-label` e `role` para acessibilidade
