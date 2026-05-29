# Medeiros Filgueira Construtora — Landing Page

Landing page profissional desenvolvida com **Vite + React + Tailwind CSS**.

## Como rodar

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

## Como fazer build

```bash
npm run build
```

## Configuração do WhatsApp

Para personalizar o número do WhatsApp, altere a constante `WA_NUMBER` nos arquivos:
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/CtaFinal.jsx`
- `src/components/Footer.jsx`

Formato: `55` + DDD + número (sem espaços ou símbolos)
Exemplo: `5562999999999`

## Estrutura

```
src/
  components/
    Navbar.jsx       — Barra de navegação sticky
    Hero.jsx         — Seção principal com CTAs
    Stats.jsx        — Strip de números/credibilidade
    Sobre.jsx        — Apresentação e diferenciais
    Servicos.jsx     — Cards de serviços
    Beneficios.jsx   — 6 benefícios numerados
    Depoimentos.jsx  — Depoimentos de clientes
    Faq.jsx          — Perguntas frequentes (acordeão)
    CtaFinal.jsx     — Chamada final para WhatsApp
    Footer.jsx       — Rodapé completo
  App.jsx
  main.jsx
  index.css
```

## Paleta de cores

| Token | Valor |
|---|---|
| `mf-green` | `#1a3d2e` |
| `mf-green-mid` | `#2d6247` |
| `mf-green-dark` | `#0d1f16` |
| `mf-gold` | `#c9a84c` |
| `mf-offwhite` | `#f8f6f1` |

## Fontes

- **Display**: Cormorant Garamond (títulos elegantes)
- **Body**: DM Sans (legibilidade moderna)
