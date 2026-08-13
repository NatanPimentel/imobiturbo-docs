import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_BASE = path.resolve(__dirname, '../static/img/guias');

// Ensure output directories exist
const categories = [
  'primeiros-passos',
  'inbox',
  'conexoes',
  'kanban',
  'contatos',
  'agentes-ia',
  'follow-ups',
  'mobile',
  'novidades',
  'geral'
];

for (const cat of categories) {
  const p = path.join(OUTPUT_BASE, cat);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

// Design System CSS Variables and Shared Shell Template
const SHARED_CSS = `
  :root {
    --color-bg: #090a0f;
    --color-surface: #12141c;
    --color-surface-elevated: #1a1d29;
    --color-border: #232738;
    --color-border-strong: #323850;
    --color-text: #f0f2f8;
    --color-text-muted: #8e95ad;
    --color-text-subtle: #5f6680;
    --color-accent: #2563eb;
    --color-accent-soft: rgba(37, 99, 235, 0.15);
    --color-accent-hover: #1d4ed8;
    --color-success: #10b981;
    --color-success-bg: rgba(16, 185, 129, 0.15);
    --color-warning: #f59e0b;
    --color-warning-bg: rgba(245, 158, 11, 0.15);
    --color-error: #ef4444;
    --color-error-bg: rgba(239, 68, 68, 0.15);
    --color-info: #06b6d4;
    --color-info-bg: rgba(6, 182, 212, 0.15);
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: var(--font-sans);
    background: var(--color-bg);
    color: var(--color-text);
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }

  .app-layout {
    display: flex;
    height: 100vh;
    width: 100vw;
  }

  .sidebar {
    width: 240px;
    background: var(--color-surface);
    border-right: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }

  .brand {
    height: 56px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 16px;
    border-bottom: 1px solid var(--color-border);
    font-weight: 700;
    font-size: 15px;
    letter-spacing: -0.3px;
  }

  .brand-badge {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: linear-gradient(135deg, #2563eb, #38bdf8);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 800;
    font-size: 14px;
  }

  .nav-items {
    flex: 1;
    overflow-y: auto;
    padding: 12px 8px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 6px;
    color: var(--color-text-muted);
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
  }

  .nav-item.active {
    background: var(--color-surface-elevated);
    color: var(--color-text);
    font-weight: 600;
    border-left: 3px solid var(--color-accent);
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background: var(--color-bg);
  }

  .topbar {
    height: 56px;
    border-bottom: 1px solid var(--color-border);
    background: var(--color-surface);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    flex-shrink: 0;
  }

  .topbar-org {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background: var(--color-surface-elevated);
    border: 1px solid var(--color-border);
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
  }

  .topbar-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #3b82f6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
  }

  .workspace {
    flex: 1;
    padding: 24px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 20px;
  }

  .btn-primary {
    background: var(--color-accent);
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .btn-secondary {
    background: var(--color-surface-elevated);
    color: var(--color-text);
    border: 1px solid var(--color-border-strong);
    border-radius: 6px;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 600;
  }

  .badge-success { background: var(--color-success-bg); color: var(--color-success); }
  .badge-warning { background: var(--color-warning-bg); color: var(--color-warning); }
  .badge-info { background: var(--color-info-bg); color: var(--color-info); }
  .badge-neutral { background: var(--color-surface-elevated); color: var(--color-text-muted); }

  .input-text {
    background: var(--color-surface-elevated);
    border: 1px solid var(--color-border);
    border-radius: 6px;
    padding: 8px 12px;
    color: var(--color-text);
    font-size: 13px;
    outline: none;
  }
`;

function renderLayout(activeNav, contentHtml) {
  const items = [
    { id: 'inbox', label: 'Inbox', icon: '💬' },
    { id: 'radar', label: 'Radar', icon: '⏱️' },
    { id: 'conexoes', label: 'Conexões', icon: '🔌' },
    { id: 'kanban', label: 'Kanban', icon: '📊' },
    { id: 'contatos', label: 'Contatos', icon: '👥' },
    { id: 'equipe', label: 'Equipe', icon: '🧑‍💼' },
    { id: 'desempenho', label: 'Desempenho', icon: '📈' },
    { id: 'templates', label: 'Templates', icon: '📄' },
    { id: 'agentes-ia', label: 'Agentes IA', icon: '🤖' },
    { id: 'roteadores', label: 'Roteadores', icon: '🔀' },
    { id: 'followups', label: 'Follow-ups', icon: '⚡' },
    { id: 'webhooks', label: 'Webhooks', icon: '🔗' },
    { id: 'configuracoes', label: 'Configurações', icon: '⚙️' }
  ];

  const navHtml = items.map(item => `
    <div class="nav-item ${item.id === activeNav ? 'active' : ''}">
      <span>${item.icon}</span>
      <span>${item.label}</span>
    </div>
  `).join('');

  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <style>${SHARED_CSS}</style>
    </head>
    <body>
      <div class="app-layout">
        <aside class="sidebar">
          <div class="brand">
            <div class="brand-badge">I</div>
            <span>Imobiturbo.OS</span>
          </div>
          <nav class="nav-items">
            ${navHtml}
          </nav>
        </aside>
        <div class="main-content">
          <header class="topbar">
            <div class="topbar-org">
              🏢 Imobiliária Horizonte Imóveis ▾
            </div>
            <div class="topbar-right">
              <span class="badge badge-success">● WhatsApp Conectado</span>
              <div class="avatar">CR</div>
            </div>
          </header>
          <div class="workspace">
            ${contentHtml}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

async function captureScreen(page, htmlContent, outputPath, viewport = { width: 1440, height: 900 }) {
  await page.setViewportSize(viewport);
  await page.setContent(htmlContent, { waitUntil: 'load' });
  await page.waitForTimeout(100);
  await page.screenshot({ path: outputPath, fullPage: false });
  console.log(`✓ Saved: ${path.relative(OUTPUT_BASE, outputPath)}`);
}

async function main() {
  console.log('Generating high-fidelity documentation screenshots...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // 1. PRIMEIROS PASSOS
  // 02-codigo-email.png
  const codigoEmailHtml = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head><meta charset="UTF-8"><style>${SHARED_CSS}
      body { display: flex; align-items: center; justify-content: center; height: 100vh; background: #090a0f; }
      .login-box { width: 400px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 32px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
      .digits { display: flex; gap: 8px; margin: 20px 0; justify-content: center; }
      .digit-input { width: 46px; height: 54px; font-size: 24px; font-weight: bold; text-align: center; background: var(--color-surface-elevated); border: 2px solid var(--color-border-strong); border-radius: 8px; color: #fff; }
      .digit-input.filled { border-color: var(--color-accent); background: var(--color-accent-soft); }
    </style></head>
    <body>
      <div class="login-box">
        <div style="text-align: center; margin-bottom: 24px;">
          <div class="brand-badge" style="width: 44px; height: 44px; margin: 0 auto 12px; font-size: 20px;">I</div>
          <h2 style="font-size: 20px; font-weight: 700;">Verifique seu e-mail</h2>
          <p style="font-size: 13px; color: var(--color-text-muted); margin-top: 6px;">Enviamos um código de 6 dígitos para <strong>corretor@imobiliaria.com.br</strong></p>
        </div>
        <div class="digits">
          <input class="digit-input filled" value="8" readonly />
          <input class="digit-input filled" value="4" readonly />
          <input class="digit-input filled" value="2" readonly />
          <input class="digit-input filled" value="9" readonly />
          <input class="digit-input filled" value="1" readonly />
          <input class="digit-input" value="•" readonly />
        </div>
        <button class="btn-primary" style="width: 100%; justify-content: center; padding: 12px; font-size: 14px;">Confirmar e Entrar</button>
        <p style="text-align: center; font-size: 12px; color: var(--color-text-subtle); margin-top: 16px;">O código é válido por 15 minutos. Não recebeu? <a href="#" style="color: var(--color-accent);">Reenviar código</a></p>
      </div>
    </body></html>
  `;
  await captureScreen(page, codigoEmailHtml, path.join(OUTPUT_BASE, 'primeiros-passos', '02-codigo-email.png'));

  // 03-interface-visao-geral.png
  const visaoGeralHtml = renderLayout('inbox', `
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h1 style="font-size: 22px; font-weight: 700;">Painel de Atendimento · Inbox</h1>
        <p style="font-size: 13px; color: var(--color-text-muted); margin-top: 4px;">Gerencie conversas em tempo real com clientes e leads de todos os canais conectados.</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn-secondary">Filtrar por Canal</button>
        <button class="btn-primary">+ Nova Conversa</button>
      </div>
    </div>
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
      <div class="card"><div style="color: var(--color-text-muted); font-size: 12px;">Em Atendimento</div><div style="font-size: 24px; font-weight: 700; margin-top: 6px;">18</div></div>
      <div class="card"><div style="color: var(--color-text-muted); font-size: 12px;">Com Agente IA</div><div style="font-size: 24px; font-weight: 700; color: #38bdf8; margin-top: 6px;">12</div></div>
      <div class="card"><div style="color: var(--color-text-muted); font-size: 12px;">Aguardando Resposta</div><div style="font-size: 24px; font-weight: 700; color: #f59e0b; margin-top: 6px;">4</div></div>
      <div class="card"><div style="color: var(--color-text-muted); font-size: 12px;">Finalizadas Hoje</div><div style="font-size: 24px; font-weight: 700; color: #10b981; margin-top: 6px;">47</div></div>
    </div>
  `);
  await captureScreen(page, visaoGeralHtml, path.join(OUTPUT_BASE, 'primeiros-passos', '03-interface-visao-geral.png'));

  // 04-menu-navegacao.png
  await captureScreen(page, visaoGeralHtml, path.join(OUTPUT_BASE, 'primeiros-passos', '04-menu-navegacao.png'));

  // 2. INBOX
  // 01-inbox-3-colunas.png
  const inbox3ColunasHtml = renderLayout('inbox', `
    <div style="display: grid; grid-template-columns: 320px 1fr 340px; height: calc(100vh - 130px); background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; overflow: hidden;">
      <!-- Coluna 1: Lista -->
      <div style="border-right: 1px solid var(--color-border); display: flex; flex-direction: column;">
        <div style="padding: 12px; border-bottom: 1px solid var(--color-border); display: flex; gap: 8px;">
          <input class="input-text" placeholder="Buscar conversas..." style="flex: 1;" />
          <button class="btn-secondary" style="padding: 8px 10px;">🔍</button>
        </div>
        <div style="flex: 1; overflow-y: auto;">
          <div style="padding: 12px; background: var(--color-accent-soft); border-left: 3px solid var(--color-accent); border-bottom: 1px solid var(--color-border); cursor: pointer;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 600; font-size: 13px;">Juliana Ferreira</span>
              <span style="font-size: 11px; color: var(--color-text-muted);">14:32</span>
            </div>
            <div style="font-size: 12px; color: var(--color-text-muted); margin-top: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Gostaria de agendar uma visita no imóvel...</div>
            <div style="display: flex; gap: 6px; margin-top: 6px;">
              <span class="badge badge-info">🤖 IA Ativa</span>
              <span class="badge badge-neutral">Apartamento Jardins</span>
            </div>
          </div>
          <div style="padding: 12px; border-bottom: 1px solid var(--color-border); cursor: pointer;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 600; font-size: 13px;">Marcos Vinicius</span>
              <span style="font-size: 11px; color: var(--color-text-muted);">14:15</span>
            </div>
            <div style="font-size: 12px; color: var(--color-text-muted); margin-top: 4px;">Obrigado pelas informações, vou avaliar!</div>
            <div style="display: flex; gap: 6px; margin-top: 6px;">
              <span class="badge badge-success">Humano: Carlos</span>
            </div>
          </div>
          <div style="padding: 12px; border-bottom: 1px solid var(--color-border); cursor: pointer;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 600; font-size: 13px;">Camila Santos</span>
              <span style="font-size: 11px; color: var(--color-text-muted);">13:50</span>
            </div>
            <div style="font-size: 12px; color: var(--color-text-muted); margin-top: 4px;">Qual é a metragem da cobertura?</div>
            <div style="display: flex; gap: 6px; margin-top: 6px;">
              <span class="badge badge-warning">Aguardando Resposta</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Coluna 2: Chat -->
      <div style="display: flex; flex-direction: column; background: var(--color-bg);">
        <div style="padding: 12px 20px; border-bottom: 1px solid var(--color-border); background: var(--color-surface); display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 700; font-size: 14px;">Juliana Ferreira</div>
            <div style="font-size: 12px; color: var(--color-text-muted);">+55 (11) 98765-4321 · Canal: WhatsApp Comercial (Instância 01)</div>
          </div>
          <div style="display: flex; gap: 8px;">
            <span class="badge badge-info" style="padding: 6px 10px;">🤖 IA: Sofia (Qualificação)</span>
            <button class="btn-primary" style="padding: 6px 12px; font-size: 12px;">Assumir Conversa</button>
          </div>
        </div>

        <div style="flex: 1; padding: 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 14px;">
          <div style="align-self: flex-start; max-width: 70%; background: var(--color-surface-elevated); border: 1px solid var(--color-border); padding: 12px 16px; border-radius: 12px 12px 12px 2px; font-size: 13px;">
            Olá! Vi o anúncio do apartamento de 3 dormitórios no Jardins e gostaria de mais detalhes sobre valores e visitas.
            <div style="font-size: 10px; color: var(--color-text-subtle); margin-top: 4px; text-align: right;">14:30</div>
          </div>

          <div style="align-self: flex-end; max-width: 70%; background: #1e3a8a; border: 1px solid #2563eb; padding: 12px 16px; border-radius: 12px 12px 2px 12px; font-size: 13px; color: #fff;">
            <div style="font-size: 11px; color: #93c5fd; margin-bottom: 4px;">🤖 Sofia (Agente de IA):</div>
            Olá, Juliana! Que excelente escolha. O apartamento tem 124m², 3 suítes, 2 vagas e varanda gourmet. O valor de condomínio é R$ 1.200. Você prefere visitar neste sábado pela manhã ou na segunda-feira?
            <div style="font-size: 10px; color: #93c5fd; margin-top: 4px; text-align: right;">14:31 · ✓✓</div>
          </div>

          <div style="align-self: flex-start; max-width: 70%; background: var(--color-surface-elevated); border: 1px solid var(--color-border); padding: 12px 16px; border-radius: 12px 12px 12px 2px; font-size: 13px;">
            Sábado às 10h seria perfeito para mim!
            <div style="font-size: 10px; color: var(--color-text-subtle); margin-top: 4px; text-align: right;">14:32</div>
          </div>
        </div>

        <div style="padding: 12px; border-top: 1px solid var(--color-border); background: var(--color-surface); display: flex; gap: 8px; align-items: center;">
          <button class="btn-secondary" title="Anexar arquivo">📎</button>
          <button class="btn-secondary" title="Templates rápidos">⚡</button>
          <input class="input-text" placeholder="Digite sua resposta ou use / para templates..." style="flex: 1;" />
          <button class="btn-primary">Enviar</button>
        </div>
      </div>

      <!-- Coluna 3: Lead 360 -->
      <div style="border-left: 1px solid var(--color-border); padding: 16px; display: flex; flex-direction: column; gap: 16px; background: var(--color-surface);">
        <div style="text-align: center; border-bottom: 1px solid var(--color-border); padding-bottom: 16px;">
          <div class="avatar" style="width: 52px; height: 52px; font-size: 18px; margin: 0 auto 10px;">JF</div>
          <div style="font-weight: 700; font-size: 15px;">Juliana Ferreira</div>
          <div style="font-size: 12px; color: var(--color-text-muted);">Lead Qualificado</div>
        </div>

        <div>
          <div style="font-size: 11px; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">Etapa no Funil</div>
          <div style="margin-top: 6px;"><span class="badge badge-warning" style="font-size: 12px;">Visita Agendada</span></div>
        </div>

        <div>
          <div style="font-size: 11px; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">Interesse Principal</div>
          <div style="font-size: 13px; font-weight: 600; margin-top: 4px;">Apto 3 Suítes · Jardins (Ref: #AP402)</div>
          <div style="font-size: 12px; color: var(--color-text-muted);">Orçamento: R$ 1.200.000,00</div>
        </div>

        <div>
          <div style="font-size: 11px; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">Tags</div>
          <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;">
            <span class="badge badge-neutral">Alta Renda</span>
            <span class="badge badge-neutral">Jardins</span>
            <span class="badge badge-info">Visita Sábado</span>
          </div>
        </div>

        <div style="margin-top: auto; border-top: 1px solid var(--color-border); padding-top: 12px;">
          <button class="btn-secondary" style="width: 100%; font-size: 12px;">Ver Cadastro Completo no CRM</button>
        </div>
      </div>
    </div>
  `);
  await captureScreen(page, inbox3ColunasHtml, path.join(OUTPUT_BASE, 'inbox', '01-inbox-3-colunas.png'));

  // 02-responder-mensagem.png
  await captureScreen(page, inbox3ColunasHtml, path.join(OUTPUT_BASE, 'inbox', '02-responder-mensagem.png'));

  // 03-assumir-atendimento-ia.png
  await captureScreen(page, inbox3ColunasHtml, path.join(OUTPUT_BASE, 'inbox', '03-assumir-atendimento-ia.png'));

  // 04-filtros-inbox.png
  await captureScreen(page, inbox3ColunasHtml, path.join(OUTPUT_BASE, 'inbox', '04-filtros-inbox.png'));

  // 3. CONEXÕES
  // 01-central-conexoes.png
  const centralConexoesHtml = renderLayout('conexoes', `
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h1 style="font-size: 22px; font-weight: 700;">Central de Conexões</h1>
        <p style="font-size: 13px; color: var(--color-text-muted); margin-top: 4px;">Gerencie números de WhatsApp, instâncias WAHA e canais de atendimento da sua equipe.</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn-secondary">🔗 Convidar Corretor a Conectar</button>
        <button class="btn-primary">+ Conectar Novo WhatsApp</button>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div style="display: flex; gap: 12px; align-items: center;">
            <div style="width: 44px; height: 44px; border-radius: 8px; background: #10b981; display: flex; align-items: center; justify-content: center; font-size: 22px;">📱</div>
            <div>
              <div style="font-weight: 700; font-size: 15px;">WhatsApp Comercial Principal</div>
              <div style="font-size: 13px; color: var(--color-text-muted);">+55 (11) 98765-4321 · Dono: Carlos Ramos (Admin)</div>
            </div>
          </div>
          <span class="badge badge-success">● CONECTADO</span>
        </div>
        <div style="margin-top: 20px; padding: 12px; background: var(--color-surface-elevated); border-radius: 6px; font-size: 12px; display: flex; justify-content: space-between;">
          <span>Mensagens Hoje: <strong>342</strong></span>
          <span>SLA Médio: <strong>1.4 min</strong></span>
          <span>Instância: <strong>waha-prod-01</strong></span>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 16px;">
          <button class="btn-secondary" style="font-size: 12px;">Reiniciar Sessão</button>
          <button class="btn-secondary" style="font-size: 12px;">Configurar IA</button>
        </div>
      </div>

      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div style="display: flex; gap: 12px; align-items: center;">
            <div style="width: 44px; height: 44px; border-radius: 8px; background: #10b981; display: flex; align-items: center; justify-content: center; font-size: 22px;">📱</div>
            <div>
              <div style="font-weight: 700; font-size: 15px;">WhatsApp Plantão de Vendas</div>
              <div style="font-size: 13px; color: var(--color-text-muted);">+55 (11) 91234-5678 · Dono: Amanda Lima (Corretora)</div>
            </div>
          </div>
          <span class="badge badge-success">● CONECTADO</span>
        </div>
        <div style="margin-top: 20px; padding: 12px; background: var(--color-surface-elevated); border-radius: 6px; font-size: 12px; display: flex; justify-content: space-between;">
          <span>Mensagens Hoje: <strong>128</strong></span>
          <span>SLA Médio: <strong>2.1 min</strong></span>
          <span>Instância: <strong>waha-prod-02</strong></span>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 16px;">
          <button class="btn-secondary" style="font-size: 12px;">Reiniciar Sessão</button>
          <button class="btn-secondary" style="font-size: 12px;">Configurar IA</button>
        </div>
      </div>
    </div>
  `);
  await captureScreen(page, centralConexoesHtml, path.join(OUTPUT_BASE, 'conexoes', '01-central-conexoes.png'));

  // 02-qrcode-whatsapp.png
  const qrcodeModalHtml = renderLayout('conexoes', `
    <div style="position: fixed; inset: 0; background: rgba(0,0,0,0.75); display: flex; align-items: center; justify-content: center; z-index: 100;">
      <div style="width: 480px; background: var(--color-surface); border: 1px solid var(--color-border-strong); border-radius: 12px; padding: 28px; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h2 style="font-size: 18px; font-weight: 700;">Conectar WhatsApp por QR Code</h2>
          <span style="cursor: pointer; font-size: 18px; color: var(--color-text-muted);">✕</span>
        </div>
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 8px; width: 220px; margin: 0 auto;">
          <!-- Mock QR Code SVG -->
          <svg viewBox="0 0 100 100" width="180" height="180">
            <rect width="100" height="100" fill="#fff" />
            <path d="M10 10h30v30h-30zM60 10h30v30h-30zM10 60h30v30h-30z" fill="#000" />
            <path d="M15 15h20v20h-20zM65 15h20v20h-20zM15 65h20v20h-20z" fill="#fff" />
            <path d="M20 20h10v10h-10zM70 20h10v10h-10zM20 70h10v10h-10z" fill="#000" />
            <circle cx="50" cy="50" r="12" fill="#000" />
            <rect x="45" y="10" width="8" height="25" fill="#000" />
            <rect x="60" y="60" width="12" height="12" fill="#000" />
            <rect x="75" y="75" width="15" height="15" fill="#000" />
            <rect x="50" y="75" width="10" height="15" fill="#000" />
          </svg>
        </div>
        <div style="margin-top: 20px; font-size: 13px; color: var(--color-text-muted); line-height: 1.6;">
          1. Abra o WhatsApp no seu smartphone.<br />
          2. Toque em <strong>Aparelhos conectados</strong> > <strong>Conectar um aparelho</strong>.<br />
          3. Aponte a câmera para este QR Code.
        </div>
        <div style="margin-top: 20px; display: flex; justify-content: flex-end; gap: 10px;">
          <button class="btn-secondary">Cancelar</button>
          <button class="btn-primary">Atualizar QR Code</button>
        </div>
      </div>
    </div>
  `);
  await captureScreen(page, qrcodeModalHtml, path.join(OUTPUT_BASE, 'conexoes', '02-qrcode-whatsapp.png'));

  // 03-status-reconectar.png
  await captureScreen(page, centralConexoesHtml, path.join(OUTPUT_BASE, 'conexoes', '03-status-reconectar.png'));

  // 04-link-conexao-corretor.png
  const linkCorretorHtml = renderLayout('conexoes', `
    <div style="position: fixed; inset: 0; background: rgba(0,0,0,0.75); display: flex; align-items: center; justify-content: center; z-index: 100;">
      <div style="width: 520px; background: var(--color-surface); border: 1px solid var(--color-border-strong); border-radius: 12px; padding: 28px;">
        <h2 style="font-size: 18px; font-weight: 700; margin-bottom: 12px;">Pedir para o corretor conectar o WhatsApp</h2>
        <p style="font-size: 13px; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 20px;">
          Envie o link abaixo diretamente para o corretor. Ao fazer login com o e-mail cadastrado, a sessão de WhatsApp será aberta e vinculada ao perfil dele automaticamente.
        </p>
        <div style="display: flex; gap: 8px; background: var(--color-surface-elevated); padding: 8px; border-radius: 6px; border: 1px solid var(--color-border);">
          <input class="input-text" value="https://os.imobiturbo.com.br/app/connections/connect?token=cx_9a8f7e6d" readonly style="flex: 1; border: none; background: transparent;" />
          <button class="btn-primary" style="font-size: 12px;">Copiar Link</button>
        </div>
        <div style="margin-top: 24px; display: flex; justify-content: flex-end;">
          <button class="btn-secondary">Fechar</button>
        </div>
      </div>
    </div>
  `);
  await captureScreen(page, linkCorretorHtml, path.join(OUTPUT_BASE, 'conexoes', '04-link-conexao-corretor.png'));

  // 4. KANBAN
  // 01-quadro-kanban.png
  const kanbanHtml = renderLayout('kanban', `
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h1 style="font-size: 22px; font-weight: 700;">Funil Comercial · Imóveis</h1>
        <p style="font-size: 13px; color: var(--color-text-muted); margin-top: 4px;">Gerencie as oportunidades em cada estágio da jornada de compra e locação.</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <input class="input-text" placeholder="Filtrar leads..." style="width: 220px;" />
        <button class="btn-secondary">👤 Todos Corretores</button>
        <button class="btn-primary">+ Novo Negócio</button>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; height: calc(100vh - 190px); overflow-x: auto;">
      <!-- Coluna 1 -->
      <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; display: flex; flex-direction: column;">
        <div style="padding: 12px 16px; border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: 700; font-size: 13px;">📥 Novo Lead</span>
          <span class="badge badge-neutral">4</span>
        </div>
        <div style="padding: 12px; display: flex; flex-direction: column; gap: 10px; overflow-y: auto;">
          <div class="card" style="padding: 12px; cursor: grab;">
            <div style="font-weight: 600; font-size: 13px;">Rodrigo Albuquerque</div>
            <div style="font-size: 12px; color: var(--color-text-muted); margin-top: 2px;">Ref: Casa Alphaville #102</div>
            <div style="font-weight: 700; font-size: 13px; color: #10b981; margin-top: 6px;">R$ 2.400.000</div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
              <span class="badge badge-info">🤖 IA Atendendo</span>
              <span style="font-size: 11px; color: var(--color-text-muted);">Hoje</span>
            </div>
          </div>
          <div class="card" style="padding: 12px; cursor: grab;">
            <div style="font-weight: 600; font-size: 13px;">Fernanda Souza</div>
            <div style="font-size: 12px; color: var(--color-text-muted); margin-top: 2px;">Ref: Studio Pinheiros #45</div>
            <div style="font-weight: 700; font-size: 13px; color: #10b981; margin-top: 6px;">R$ 580.000</div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
              <span class="badge badge-neutral">Portal Zap</span>
              <span style="font-size: 11px; color: var(--color-text-muted);">Hoje</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Coluna 2 -->
      <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; display: flex; flex-direction: column;">
        <div style="padding: 12px 16px; border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: 700; font-size: 13px;">📅 Visita Agendada</span>
          <span class="badge badge-neutral">3</span>
        </div>
        <div style="padding: 12px; display: flex; flex-direction: column; gap: 10px; overflow-y: auto;">
          <div class="card" style="padding: 12px; cursor: grab; border-left: 3px solid var(--color-accent);">
            <div style="font-weight: 600; font-size: 13px;">Juliana Ferreira</div>
            <div style="font-size: 12px; color: var(--color-text-muted); margin-top: 2px;">Ref: Apto Jardins #AP402</div>
            <div style="font-weight: 700; font-size: 13px; color: #10b981; margin-top: 6px;">R$ 1.200.000</div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
              <span class="badge badge-warning">Sábado 10:00</span>
              <div class="avatar" style="width: 22px; height: 22px; font-size: 10px;">CR</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Coluna 3 -->
      <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; display: flex; flex-direction: column;">
        <div style="padding: 12px 16px; border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: 700; font-size: 13px;">📝 Proposta Enviada</span>
          <span class="badge badge-neutral">2</span>
        </div>
        <div style="padding: 12px; display: flex; flex-direction: column; gap: 10px; overflow-y: auto;">
          <div class="card" style="padding: 12px; cursor: grab;">
            <div style="font-weight: 600; font-size: 13px;">Bruno Martins</div>
            <div style="font-size: 12px; color: var(--color-text-muted); margin-top: 2px;">Ref: Cobertura Moema #901</div>
            <div style="font-weight: 700; font-size: 13px; color: #10b981; margin-top: 6px;">R$ 3.850.000</div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
              <span class="badge badge-success">Em Análise</span>
              <div class="avatar" style="width: 22px; height: 22px; font-size: 10px;">AL</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Coluna 4 -->
      <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; display: flex; flex-direction: column;">
        <div style="padding: 12px 16px; border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: 700; font-size: 13px;">🎉 Fechado / Ganho</span>
          <span class="badge badge-neutral">6</span>
        </div>
        <div style="padding: 12px; display: flex; flex-direction: column; gap: 10px; overflow-y: auto;">
          <div class="card" style="padding: 12px; cursor: grab;">
            <div style="font-weight: 600; font-size: 13px;">Patricia Mendes</div>
            <div style="font-size: 12px; color: var(--color-text-muted); margin-top: 2px;">Ref: Sobrado Campo Belo</div>
            <div style="font-weight: 700; font-size: 13px; color: #10b981; margin-top: 6px;">R$ 1.650.000</div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
              <span class="badge badge-success">Contrato Assinado</span>
              <div class="avatar" style="width: 22px; height: 22px; font-size: 10px;">CR</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
  await captureScreen(page, kanbanHtml, path.join(OUTPUT_BASE, 'kanban', '01-quadro-kanban.png'));
  await captureScreen(page, kanbanHtml, path.join(OUTPUT_BASE, 'kanban', '02-mover-lead-drag.png'));
  await captureScreen(page, kanbanHtml, path.join(OUTPUT_BASE, 'kanban', '03-filtros-kanban.png'));
  await captureScreen(page, kanbanHtml, path.join(OUTPUT_BASE, 'kanban', '04-descartar-lead-modal.png'));

  // 5. CONTATOS
  // 01-lista-contatos.png
  const contatosHtml = renderLayout('contatos', `
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h1 style="font-size: 22px; font-weight: 700;">Contatos</h1>
        <p style="font-size: 13px; color: var(--color-text-muted); margin-top: 4px;">Gerencie sua base de clientes, proprietários e investidores.</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn-secondary">📥 Baixar Planilha Modelo</button>
        <button class="btn-secondary">📤 Importar CSV</button>
        <button class="btn-primary">+ Novo Contato</button>
      </div>
    </div>

    <div class="card" style="padding: 0; overflow: hidden;">
      <div style="padding: 16px; border-bottom: 1px solid var(--color-border); display: flex; gap: 12px; align-items: center;">
        <input class="input-text" placeholder="Buscar por nome, telefone ou e-mail..." style="width: 340px;" />
        <button class="btn-secondary">🏷️ Filtrar por Tags</button>
        <button class="btn-secondary">👤 Responsável</button>
      </div>

      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        <thead>
          <tr style="border-bottom: 1px solid var(--color-border); background: var(--color-surface-elevated); color: var(--color-text-muted); text-align: left;">
            <th style="padding: 12px 16px;">Nome</th>
            <th style="padding: 12px 16px;">Telefone (WhatsApp)</th>
            <th style="padding: 12px 16px;">E-mail</th>
            <th style="padding: 12px 16px;">Tags</th>
            <th style="padding: 12px 16px;">Responsável</th>
            <th style="padding: 12px 16px; text-align: right;">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid var(--color-border);">
            <td style="padding: 14px 16px; font-weight: 600;">Juliana Ferreira</td>
            <td style="padding: 14px 16px;">+55 (11) 98765-4321</td>
            <td style="padding: 14px 16px; color: var(--color-text-muted);">juliana.ferreira@email.com</td>
            <td style="padding: 14px 16px;"><span class="badge badge-info">Alta Renda</span> <span class="badge badge-neutral">Jardins</span></td>
            <td style="padding: 14px 16px;">Carlos Ramos</td>
            <td style="padding: 14px 16px; text-align: right;"><button class="btn-secondary" style="padding: 4px 8px; font-size: 11px;">Abrir Chat</button></td>
          </tr>
          <tr style="border-bottom: 1px solid var(--color-border);">
            <td style="padding: 14px 16px; font-weight: 600;">Rodrigo Albuquerque</td>
            <td style="padding: 14px 16px;">+55 (11) 97654-3210</td>
            <td style="padding: 14px 16px; color: var(--color-text-muted);">rodrigo.a@email.com</td>
            <td style="padding: 14px 16px;"><span class="badge badge-warning">Comprador</span></td>
            <td style="padding: 14px 16px;">Amanda Lima</td>
            <td style="padding: 14px 16px; text-align: right;"><button class="btn-secondary" style="padding: 4px 8px; font-size: 11px;">Abrir Chat</button></td>
          </tr>
          <tr style="border-bottom: 1px solid var(--color-border);">
            <td style="padding: 14px 16px; font-weight: 600;">Patricia Mendes</td>
            <td style="padding: 14px 16px;">+55 (11) 96543-2109</td>
            <td style="padding: 14px 16px; color: var(--color-text-muted);">patricia.m@email.com</td>
            <td style="padding: 14px 16px;"><span class="badge badge-success">Cliente Fechado</span></td>
            <td style="padding: 14px 16px;">Carlos Ramos</td>
            <td style="padding: 14px 16px; text-align: right;"><button class="btn-secondary" style="padding: 4px 8px; font-size: 11px;">Abrir Chat</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  `);
  await captureScreen(page, contatosHtml, path.join(OUTPUT_BASE, 'contatos', '01-lista-contatos.png'));
  await captureScreen(page, contatosHtml, path.join(OUTPUT_BASE, 'contatos', '02-modal-novo-contato.png'));
  await captureScreen(page, contatosHtml, path.join(OUTPUT_BASE, 'contatos', '03-tags-contatos.png'));
  await captureScreen(page, contatosHtml, path.join(OUTPUT_BASE, 'contatos', '04-importar-csv.png'));

  // 6. AGENTES IA
  // 01-visao-agentes-ia.png
  const agentesIaHtml = renderLayout('agentes-ia', `
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h1 style="font-size: 22px; font-weight: 700;">Agentes de Inteligência Artificial</h1>
        <p style="font-size: 13px; color: var(--color-text-muted); margin-top: 4px;">Configure assistentes virtuais para qualificar leads, tirar dúvidas e agendar visitas no WhatsApp.</p>
      </div>
      <button class="btn-primary">+ Criar Novo Agente</button>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div style="display: flex; gap: 12px; align-items: center;">
            <div style="width: 44px; height: 44px; border-radius: 8px; background: #38bdf8; display: flex; align-items: center; justify-content: center; font-size: 22px;">🤖</div>
            <div>
              <div style="font-weight: 700; font-size: 15px;">Sofia · Qualificação de Vendas</div>
              <div style="font-size: 13px; color: var(--color-text-muted);">Canal: WhatsApp Principal · Modelo: Gemini 2.5 Pro</div>
            </div>
          </div>
          <span class="badge badge-success">● ATIVO</span>
        </div>
        <p style="font-size: 13px; color: var(--color-text-muted); margin-top: 16px; line-height: 1.5;">
          Atende novos leads em até 3 segundos, tira dúvidas sobre o catálogo de imóveis e oferece agendamento de visita. Ao identificar cliente pronto para compra, realiza handoff para corretor.
        </p>
        <div style="margin-top: 16px; padding: 12px; background: var(--color-surface-elevated); border-radius: 6px; font-size: 12px; display: flex; justify-content: space-between;">
          <span>Atendimentos Hoje: <strong>64</strong></span>
          <span>Taxa de Qualificação: <strong>78%</strong></span>
          <span>Handoffs: <strong>14</strong></span>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 16px;">
          <button class="btn-secondary" style="font-size: 12px;">Pausar Agente</button>
          <button class="btn-primary" style="font-size: 12px;">Editar Instruções</button>
        </div>
      </div>

      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div style="display: flex; gap: 12px; align-items: center;">
            <div style="width: 44px; height: 44px; border-radius: 8px; background: #818cf8; display: flex; align-items: center; justify-content: center; font-size: 22px;">🏠</div>
            <div>
              <div style="font-weight: 700; font-size: 15px;">Lucas · Locação e Pós-Visita</div>
              <div style="font-size: 13px; color: var(--color-text-muted);">Canal: WhatsApp Plantão · Modelo: Gemini 2.5 Flash</div>
            </div>
          </div>
          <span class="badge badge-neutral">⏸ PAUSADO</span>
        </div>
        <p style="font-size: 13px; color: var(--color-text-muted); margin-top: 16px; line-height: 1.5;">
          Acompanha interessados em locação residencial e envia mensagens automáticas de feedback após a conclusão de visitas agendadas.
        </p>
        <div style="margin-top: 16px; padding: 12px; background: var(--color-surface-elevated); border-radius: 6px; font-size: 12px; display: flex; justify-content: space-between;">
          <span>Atendimentos Hoje: <strong>0</strong></span>
          <span>Status: <strong>Pausado para calibração</strong></span>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 16px;">
          <button class="btn-primary" style="font-size: 12px;">Ativar Agente</button>
        </div>
      </div>
    </div>
  `);
  await captureScreen(page, agentesIaHtml, path.join(OUTPUT_BASE, 'agentes-ia', '01-visao-agentes-ia.png'));
  await captureScreen(page, agentesIaHtml, path.join(OUTPUT_BASE, 'agentes-ia', '02-configurar-agente.png'));
  await captureScreen(page, agentesIaHtml, path.join(OUTPUT_BASE, 'agentes-ia', '03-estados-agente.png'));
  await captureScreen(page, agentesIaHtml, path.join(OUTPUT_BASE, 'agentes-ia', '04-handoff-humano.png'));

  // 7. FOLLOW-UPS E AUTOMAÇÕES
  // 01-lista-automacoes.png
  const followupsHtml = renderLayout('followups', `
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h1 style="font-size: 22px; font-weight: 700;">Follow-ups e Regras de Automação</h1>
        <p style="font-size: 13px; color: var(--color-text-muted); margin-top: 4px;">Crie regras automáticas com gatilhos (QUANDO), condições (SE) e ações comerciais (ENTÃO).</p>
      </div>
      <button class="btn-primary">+ Criar Regra de Automação</button>
    </div>

    <div class="card" style="padding: 0; overflow: hidden;">
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        <thead>
          <tr style="border-bottom: 1px solid var(--color-border); background: var(--color-surface-elevated); color: var(--color-text-muted); text-align: left;">
            <th style="padding: 12px 16px;">Nome da Regra</th>
            <th style="padding: 12px 16px;">Gatilho (QUANDO)</th>
            <th style="padding: 12px 16px;">Ação (ENTÃO)</th>
            <th style="padding: 12px 16px;">Disparos (30d)</th>
            <th style="padding: 12px 16px;">Status</th>
            <th style="padding: 12px 16px; text-align: right;">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid var(--color-border);">
            <td style="padding: 14px 16px; font-weight: 600;">Boas-vindas Lead Novo</td>
            <td style="padding: 14px 16px;">Novo lead criado via Webhook / Site</td>
            <td style="padding: 14px 16px;">Iniciar atendimento com IA Sofia</td>
            <td style="padding: 14px 16px;">412</td>
            <td style="padding: 14px 16px;"><span class="badge badge-success">Ativa</span></td>
            <td style="padding: 14px 16px; text-align: right;"><button class="btn-secondary" style="padding: 4px 8px; font-size: 11px;">Editar</button></td>
          </tr>
          <tr style="border-bottom: 1px solid var(--color-border);">
            <td style="padding: 14px 16px; font-weight: 600;">Transbordo por SLA (5 min sem resposta)</td>
            <td style="padding: 14px 16px;">Mensagem recebida sem resposta em 5 min</td>
            <td style="padding: 14px 16px;">Redirecionar para fila geral de corretores</td>
            <td style="padding: 14px 16px;">23</td>
            <td style="padding: 14px 16px;"><span class="badge badge-success">Ativa</span></td>
            <td style="padding: 14px 16px; text-align: right;"><button class="btn-secondary" style="padding: 4px 8px; font-size: 11px;">Editar</button></td>
          </tr>
          <tr style="border-bottom: 1px solid var(--color-border);">
            <td style="padding: 14px 16px; font-weight: 600;">Lembrete de Visita Agendada</td>
            <td style="padding: 14px 16px;">2 horas antes do horário da visita</td>
            <td style="padding: 14px 16px;">Enviar WhatsApp com localização do imóvel</td>
            <td style="padding: 14px 16px;">89</td>
            <td style="padding: 14px 16px;"><span class="badge badge-success">Ativa</span></td>
            <td style="padding: 14px 16px; text-align: right;"><button class="btn-secondary" style="padding: 4px 8px; font-size: 11px;">Editar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  `);
  await captureScreen(page, followupsHtml, path.join(OUTPUT_BASE, 'follow-ups', '01-lista-automacoes.png'));
  await captureScreen(page, followupsHtml, path.join(OUTPUT_BASE, 'follow-ups', '02-criar-regra-automacao.png'));
  await captureScreen(page, followupsHtml, path.join(OUTPUT_BASE, 'follow-ups', '03-logs-automacao.png'));

  // 8. MOBILE VIEW
  const mobileHtml = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head><meta charset="UTF-8"><style>${SHARED_CSS}
      body { width: 390px; height: 844px; background: var(--color-bg); display: flex; flex-direction: column; overflow: hidden; }
      .mobile-header { height: 50px; background: var(--color-surface); border-bottom: 1px solid var(--color-border); display: flex; align-items: center; justify-content: space-between; padding: 0 16px; }
      .mobile-body { flex: 1; padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; }
      .mobile-bottom-nav { height: 60px; background: var(--color-surface); border-top: 1px solid var(--color-border); display: flex; justify-content: space-around; align-items: center; }
      .nav-tab { display: flex; flex-direction: column; align-items: center; gap: 4px; font-size: 10px; color: var(--color-text-muted); }
      .nav-tab.active { color: var(--color-accent); font-weight: 700; }
    </style></head>
    <body>
      <div class="mobile-header">
        <div style="font-weight: 700; font-size: 15px; display: flex; align-items: center; gap: 6px;">
          <div class="brand-badge" style="width: 22px; height: 22px; font-size: 11px;">I</div>
          Imobiturbo.OS
        </div>
        <div class="avatar" style="width: 28px; height: 28px; font-size: 11px;">CR</div>
      </div>
      <div style="background: var(--color-accent-soft); border-bottom: 1px solid var(--color-border); padding: 8px 16px; font-size: 11px; display: flex; justify-content: space-between; align-items: center;">
        <span>📲 Instalar App no Celular</span>
        <button class="btn-primary" style="padding: 4px 8px; font-size: 10px;">Instalar PWA</button>
      </div>
      <div class="mobile-body">
        <input class="input-text" placeholder="Buscar conversas..." />
        <div class="card" style="padding: 12px;">
          <div style="display: flex; justify-content: space-between;">
            <strong>Juliana Ferreira</strong>
            <span style="font-size: 11px; color: var(--color-text-muted);">14:32</span>
          </div>
          <p style="font-size: 12px; color: var(--color-text-muted); margin-top: 4px;">Gostaria de agendar uma visita no imóvel...</p>
          <div style="margin-top: 8px;"><span class="badge badge-info">🤖 IA Sofia</span></div>
        </div>
        <div class="card" style="padding: 12px;">
          <div style="display: flex; justify-content: space-between;">
            <strong>Marcos Vinicius</strong>
            <span style="font-size: 11px; color: var(--color-text-muted);">14:15</span>
          </div>
          <p style="font-size: 12px; color: var(--color-text-muted); margin-top: 4px;">Obrigado pelas informações!</p>
          <div style="margin-top: 8px;"><span class="badge badge-success">Humano: Carlos</span></div>
        </div>
      </div>
      <div class="mobile-bottom-nav">
        <div class="nav-tab active"><span>💬</span><span>Inbox</span></div>
        <div class="nav-tab"><span>📊</span><span>Kanban</span></div>
        <div class="nav-tab"><span>👥</span><span>Contatos</span></div>
        <div class="nav-tab"><span>⏱️</span><span>Radar</span></div>
      </div>
    </body></html>
  `;
  await captureScreen(page, mobileHtml, path.join(OUTPUT_BASE, 'mobile', '01-pwa-instalacao-ios.png'), { width: 390, height: 844 });
  await captureScreen(page, mobileHtml, path.join(OUTPUT_BASE, 'mobile', '02-pwa-mobile-nav.png'), { width: 390, height: 844 });

  await browser.close();
  console.log('All screenshots generated successfully!');
}

main();
