# Central de Ajuda · Imobiturbo.OS

Repositório oficial da documentação pública e central de ajuda do **Imobiturbo.OS** (`docs.imobiturbo.com.br`).

Construído com [Docusaurus](https://docusaurus.io/) e hospedado via [Cloudflare Pages](https://pages.cloudflare.com/).

---

## 🚀 Estrutura de Documentação

- `docs/` — Artigos e tutoriais passo a passo categorizados:
  - `01-primeiros-passos/` — Visão geral, primeiro acesso e navegação.
  - `02-inbox/` — Atendimento em tempo real, transcrições e handoff.
  - `03-conexoes/` — WhatsApp por QR Code e múltiplos canais por corretor.
  - `04-kanban/` — Funil de vendas, estágios e filtros.
  - `05-contatos/` — Gestão cadastral, tags e importação CSV.
  - `06-agentes-ia/` — Assistentes virtuais de qualificação.
  - `07-follow-ups/` — Regras automáticas QUANDO/SE/ENTÃO.
  - `08-aplicativo-mobile/` — Instalação PWA no iOS e Android.
- `blog/` — Novidades, melhorias e patch notes públicos para clientes.
- `static/img/guias/` — Screenshots em alta resolução sem dados sensíveis.
- `scripts/` — Scripts utilitários de geração e validação de screenshots via Playwright.

---

## 💻 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor local de desenvolvimento
npm start

# Gerar build de produção
npm run build
```

---

## ☁️ Deploy via Cloudflare Pages

- **Branch de Produção**: `main`
- **Comando de Build**: `npm run build`
- **Diretório de Saída (Output)**: `build`
- **Domínio Canônico**: `docs.imobiturbo.com.br`
