import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const BASE_DIR = 'C:/Projetos/imobiturbo-docs/static/img/guias';

const annotations = [
  // CONEXÕES
  {
    image: 'conexoes/01-central-conexoes.png',
    highlights: [
      { x: 1210, y: 390, w: 180, h: 42, label: '1', title: 'Conectar Novo WhatsApp', color: '#BFD730' },
      { x: 285, y: 200, w: 670, h: 105, label: '2', title: 'Integração Meta / Facebook Leads', color: '#6FA8FF' }
    ]
  },
  {
    image: 'conexoes/01-lista-conexoes-whatsapp.png',
    highlights: [
      { x: 1210, y: 390, w: 180, h: 42, label: '1', title: 'Conectar Novo WhatsApp', color: '#BFD730' }
    ]
  },
  {
    image: 'conexoes/03-status-conectado-bateria.png',
    highlights: [
      { x: 285, y: 445, w: 360, h: 360, label: '✓', title: 'Status Conectado & Ações', color: '#BFD730' }
    ]
  },

  // INBOX
  {
    image: 'inbox/01-visao-geral-3-colunas.png',
    highlights: [
      { x: 265, y: 95, w: 300, h: 790, label: '1', title: 'Lista de Conversas & Filtros', color: '#BFD730' },
      { x: 575, y: 95, w: 520, h: 790, label: '2', title: 'Chat Central', color: '#6FA8FF' },
      { x: 1105, y: 95, w: 330, h: 790, label: '3', title: 'Visão 360° do Lead', color: '#FFB020' }
    ]
  },
  {
    image: 'inbox/01-inbox-3-colunas.png',
    highlights: [
      { x: 265, y: 95, w: 300, h: 790, label: '1', title: 'Lista de Conversas', color: '#BFD730' },
      { x: 575, y: 95, w: 520, h: 790, label: '2', title: 'Área de Atendimento', color: '#6FA8FF' },
      { x: 1105, y: 95, w: 330, h: 790, label: '3', title: 'Detalhes do Cliente', color: '#FFB020' }
    ]
  },
  {
    image: 'inbox/02-filtros-fila-minhas-fechadas.png',
    highlights: [
      { x: 275, y: 200, w: 280, h: 42, label: '1', title: 'Filtros de Fila, Minhas e IA', color: '#BFD730' }
    ]
  },
  {
    image: 'inbox/04-filtros-inbox.png',
    highlights: [
      { x: 275, y: 150, w: 280, h: 90, label: '1', title: 'Busca & Filtros de Atendimento', color: '#BFD730' }
    ]
  },

  // KANBAN
  {
    image: 'kanban/01-quadro-kanban.png',
    highlights: [
      { x: 265, y: 140, w: 1140, h: 70, label: '1', title: 'Seletor de Pipeline & Funil', color: '#BFD730' }
    ]
  },
  {
    image: 'kanban/01-visao-geral-funil-colunas.png',
    highlights: [
      { x: 265, y: 140, w: 1140, h: 70, label: '1', title: 'Pipelines Cadastrados', color: '#BFD730' }
    ]
  },

  // CONTATOS
  {
    image: 'contatos/01-tabela-lista-contatos.png',
    highlights: [
      { x: 1150, y: 95, w: 110, h: 40, label: '1', title: 'Importar Leads (CSV)', color: '#6FA8FF' },
      { x: 1275, y: 95, w: 140, h: 40, label: '2', title: '+ Novo Contato', color: '#BFD730' },
      { x: 265, y: 170, w: 300, h: 45, label: '3', title: 'Filtro & Busca 360°', color: '#FFB020' }
    ]
  },
  {
    image: 'contatos/01-lista-contatos.png',
    highlights: [
      { x: 1150, y: 95, w: 110, h: 40, label: '1', title: 'Importar CSV', color: '#6FA8FF' },
      { x: 1275, y: 95, w: 140, h: 40, label: '2', title: '+ Novo Contato', color: '#BFD730' }
    ]
  },

  // AGENTES IA
  {
    image: 'agentes-ia/01-lista-agentes-ia.png',
    highlights: [
      { x: 1250, y: 250, w: 140, h: 42, label: '1', title: '+ Novo Agente', color: '#BFD730' },
      { x: 265, y: 310, w: 360, h: 240, label: '2', title: 'Agente Atendimento Geral', color: '#6FA8FF' }
    ]
  },
  {
    image: 'agentes-ia/01-visao-agentes-ia.png',
    highlights: [
      { x: 1250, y: 250, w: 140, h: 42, label: '1', title: '+ Novo Agente', color: '#BFD730' }
    ]
  },

  // FOLLOW-UPS
  {
    image: 'follow-ups/01-lista-regras-followup.png',
    highlights: [
      { x: 1260, y: 250, w: 130, h: 42, label: '1', title: '+ Novo Fluxo de Automação', color: '#BFD730' },
      { x: 265, y: 305, w: 360, h: 160, label: '2', title: 'Regra de Lead Novo', color: '#6FA8FF' }
    ]
  },
  {
    image: 'follow-ups/01-lista-automacoes.png',
    highlights: [
      { x: 1260, y: 250, w: 130, h: 42, label: '1', title: '+ Novo Fluxo', color: '#BFD730' }
    ]
  },

  // PRIMEIROS PASSOS
  {
    image: 'primeiros-passos/02-visao-geral-menu-lateral.png',
    highlights: [
      { x: 0, y: 0, w: 240, h: 900, label: '1', title: 'Barra de Navegação Operacional', color: '#BFD730' },
      { x: 265, y: 15, w: 180, h: 40, label: '2', title: 'Seletor de Organização', color: '#6FA8FF' }
    ]
  }
];

async function annotateAll() {
  console.log('Generating high-contrast visual highlights for tutorial screenshots...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  for (const item of annotations) {
    const fullImagePath = path.join(BASE_DIR, item.image);
    if (!fs.existsSync(fullImagePath)) {
      console.log(`Skipping missing image: ${item.image}`);
      continue;
    }

    const imageBase64 = fs.readFileSync(fullImagePath).toString('base64');
    const dataUri = `data:image/png;base64,${imageBase64}`;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            width: 1440px;
            height: 900px;
            overflow: hidden;
            background: #000;
            position: relative;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          }
          .base-img {
            width: 1440px;
            height: 900px;
            display: block;
          }
          .highlight-box {
            position: absolute;
            border-radius: 8px;
            border-width: 3px;
            border-style: solid;
            box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.28), 0 0 24px rgba(191, 215, 48, 0.6);
            pointer-events: none;
            transition: all 0.3s ease;
          }
          .badge {
            position: absolute;
            top: -18px;
            left: -18px;
            min-width: 34px;
            height: 34px;
            padding: 0 8px;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 16px;
            color: #000000;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.7);
            border: 2px solid #FFFFFF;
          }
          .title-tag {
            position: absolute;
            bottom: -32px;
            left: 0;
            background: rgba(10, 10, 10, 0.92);
            color: #FFFFFF;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            padding: 4px 10px;
            border-radius: 6px;
            border: 1px solid #333333;
            white-space: nowrap;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
          }
        </style>
      </head>
      <body>
        <img class="base-img" src="${dataUri}" />
        ${item.highlights.map(h => `
          <div class="highlight-box" style="
            left: ${h.x}px;
            top: ${h.y}px;
            width: ${h.w}px;
            height: ${h.h}px;
            border-color: ${h.color};
            box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.25), 0 0 20px ${h.color}88;
          ">
            <div class="badge" style="background: ${h.color};">
              ${h.label}
            </div>
            ${h.title ? `<div class="title-tag" style="border-left: 3px solid ${h.color};">${h.title}</div>` : ''}
          </div>
        `).join('')}
      </body>
      </html>
    `;

    await page.setContent(html);
    await page.waitForTimeout(300);
    await page.screenshot({ path: fullImagePath });
    console.log(`✓ Enhanced with visual highlight: ${item.image}`);
  }

  await browser.close();
  console.log('\n🎉 ALL VISUAL HIGHLIGHTS RENDERED ON REAL SCREENSHOTS!');
}

annotateAll().catch(e => {
  console.error('Annotation error:', e);
  process.exit(1);
});
