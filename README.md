# Paikauhale Software Engineering — Website

Site institucional da **Paikauhale Software Engineering**, desenvolvido com HTML, CSS e JavaScript puros — sem frameworks, sem dependências externas além das fontes e widgets do TradingView.

---

## Estrutura

```
/
├── index.html          # Landing page principal
├── projetos.html       # Página de projetos
├── imagens/
│   ├── logoengineering.jpeg
│   └── favicon.png
└── vídeos/
    └── semtextosatelite.mp4
```

---

## Páginas

### `index.html` — Landing page
- Nav fixo com menu mobile responsivo
- Hero com vídeo de fundo, logo animado e CTA duplo
- Ticker de mercado em tempo real via TradingView
- Seções: Serviços, Sobre, Origem do nome, Contato
- Scroll reveal com IntersectionObserver

### `projetos.html` — Projetos
- Card em destaque do SaaS de Drywall com mockup visual fiel ao sistema real
- Espaço reservado para vídeo demo (`<!-- cole aqui sua tag <video> ou <iframe> -->`)
- CTA de orçamento linkando de volta ao `index.html#contato`

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Markup | HTML5 semântico |
| Estilo | CSS3 com variáveis customizadas (sem framework) |
| Script | JavaScript vanilla (ES6+) |
| Fontes | Space Grotesk + JetBrains Mono via Google Fonts |
| Widget | TradingView Ticker Tape |
| Analytics | Google Analytics (gtag.js) |

---

## Design System

Todas as cores são definidas como variáveis CSS em `:root`:

```css
--navy:      #070d1a   /* fundo principal */
--navy-2:    #0a1022   /* fundo alternativo */
--panel:     rgba(14, 30, 60, 0.6)  /* cards e painéis */
--blue:      #4fc3f7   /* azul elétrico — cor primária */
--cyan:      #00e5ff   /* ciano — destaques e valores */
--silver:    #a8c4d4   /* prata — detalhes */
--text:      #d6eaf5   /* texto principal */
--muted:     #6a90a8   /* texto secundário */
```

Tipografia:
- **Space Grotesk** — corpo e títulos
- **JetBrains Mono** — labels, badges, valores técnicos e código

---

## Como usar localmente

Não há build step. Basta abrir o arquivo diretamente no navegador:

```bash
# com Live Server (VS Code) ou qualquer servidor estático
npx serve .

# ou simplesmente
open index.html
```

---

## Deploy

O site foi projetado para deploy estático em qualquer CDN. Recomendado:

- **Netlify** — arraste a pasta raiz para [app.netlify.com](https://app.netlify.com)
- **Vercel** — `vercel --prod` na raiz do projeto
- **GitHub Pages** — ative em `Settings > Pages > Deploy from branch`

---

## Como adicionar o vídeo demo

Em `projetos.html`, localize o bloco marcado com `<!-- INSTRUÇÃO -->` e substitua pelo código do seu vídeo:

```html
<!-- Arquivo local -->
<video controls width="100%" poster="imagens/drywall-thumb.png">
  <source src="videos/drywall-demo.mp4" type="video/mp4">
</video>

<!-- YouTube -->
<iframe
  src="https://www.youtube.com/embed/SEU_ID_AQUI"
  width="100%" height="100%"
  frameborder="0" allowfullscreen>
</iframe>
```

---

## Projetos referenciados

### SaaS — Calculadora de Insumos para Drywall
Plataforma web que calcula materiais e gera orçamentos para instalações de drywall.

- **Stack:** TypeScript · React · Node.js · SQLite
- **Funcionalidades:** cálculo de placas, guias, montantes e parafusos por m²; orçamento estimado; autenticação com login
- **Status:** em desenvolvimento

---

## Identidade

O nome **Paikauhale** é o nome oficial da estrela Tau Scorpii (τ Sco), na constelação Scorpius, aprovado pela International Astronomical Union (IAU) em 2018. Em havaiano significa *"viajante das estrelas"*.

---

## Licença

© 2026 Paikauhale Software Engineering. Todos os direitos reservados.  
Desenvolvido por **Lucas Bertoncelo**.
