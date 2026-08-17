/**
 * Captura real dos novos tutoriais (missão docs) direto de os.imobiturbo.com.br.
 * Reutiliza o token de auth do capture-authentic-os.mjs (mesma origem).
 * NÃO versionar este arquivo com segredos: o token vem lido do script irmão.
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const source = fs.readFileSync(new URL('./capture-authentic-os.mjs', import.meta.url), 'utf8');
const sbAuth = source.match(/const sbDeskcommAuth = '([^']+)'/)?.[1];
const activeOrg = source.match(/name: 'active_org',\s*value: '([^']+)'/)?.[1];
if (!sbAuth || !activeOrg) {
  console.error('Falha ao ler token de capture-authentic-os.mjs');
  process.exit(1);
}

const cookies = [
  { name: 'sb-deskcomm-auth', value: sbAuth, domain: 'os.imobiturbo.com.br', path: '/', secure: true, httpOnly: true, sameSite: 'Lax' },
  { name: 'active_org', value: activeOrg, domain: 'os.imobiturbo.com.br', path: '/', secure: true, httpOnly: false, sameSite: 'Lax' },
];

const BASE_OUT = 'C:/Projetos/imobiturbo-docs/static/img/guias';

async function shot(page, subpath, file, waitMs = 1600) {
  const full = path.join(BASE_OUT, subpath, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  await page.waitForTimeout(waitMs);
  await page.screenshot({ path: full });
  console.log(`✓ ${subpath}/${file}`);
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.addCookies(cookies);
  const page = await context.newPage();

  // Conexões — aba API Oficial (Meta), com valores sensíveis mascarados
  console.log('\n--- Conexões / API Oficial ---');
  await page.goto('https://os.imobiturbo.com.br/app/connections?aba=oficial', { waitUntil: 'networkidle' });
  const MASK_CSS = `
    code { filter: blur(6px); }
    span.font-mono { filter: blur(6px); }
    div[data-testid="canal-conectado"] span.font-medium { filter: blur(6px); }
    div[data-testid="canal-conectado"] .font-mono { filter: blur(6px); }
  `;
  await page.addStyleTag({ content: MASK_CSS });
  await shot(page, 'conexoes', '05-aba-api-oficial-meta.png');
  // Recarrega para descartar a máscara nas próximas capturas
  await page.reload({ waitUntil: 'networkidle' });

  // Formulários Meta
  console.log('\n--- Formulários Meta ---');
  await page.goto('https://os.imobiturbo.com.br/app/integrations/meta', { waitUntil: 'networkidle' });
  await shot(page, 'conexoes', '06-formularios-meta.png');

  // Skills da IA
  console.log('\n--- Skills da IA ---');
  await page.goto('https://os.imobiturbo.com.br/app/ai/skills', { waitUntil: 'networkidle' });
  await shot(page, 'agentes-ia', '05-skills-da-ia.png');

  // Memória da IA
  console.log('\n--- Memória da IA ---');
  await page.goto('https://os.imobiturbo.com.br/app/ai/memory', { waitUntil: 'networkidle' });
  await shot(page, 'agentes-ia', '06-memoria-da-ia.png');

  // Bases de Conhecimento
  console.log('\n--- Bases de Conhecimento ---');
  await page.goto('https://os.imobiturbo.com.br/app/ai/knowledge/sources', { waitUntil: 'networkidle' });
  await shot(page, 'agentes-ia', '07-bases-de-conhecimento.png');

  // Roteadores
  console.log('\n--- Roteadores ---');
  await page.goto('https://os.imobiturbo.com.br/app/ai/routers', { waitUntil: 'networkidle' });
  await shot(page, 'agentes-ia', '08-roteadores.png');

  // Follow-ups (Fluxos)
  console.log('\n--- Follow-ups Fluxos ---');
  await page.goto('https://os.imobiturbo.com.br/app/ai/followups', { waitUntil: 'networkidle' });
  await shot(page, 'follow-ups', '04-fluxos-followup.png');

  // Radar (lista com dados de clientes reais → mascarar itens, manter cabeçalho)
  console.log('\n--- Radar ---');
  await page.goto('https://os.imobiturbo.com.br/app/radar', { waitUntil: 'networkidle' });
  const RADAR_CSS = `
    [data-testid="radar-item"] { filter: blur(6px); }
  `;
  await page.addStyleTag({ content: RADAR_CSS });
  await shot(page, 'radar', '01-radar-de-risco.png');

  // Templates
  console.log('\n--- Templates ---');
  await page.goto('https://os.imobiturbo.com.br/app/templates', { waitUntil: 'networkidle' });
  await shot(page, 'inbox', '05-templates-de-resposta.png');

  // ==== Rodada 2: Equipe, Desempenho, Evolução, LGPD, Automações, Templates da Meta ====

  // Equipe — Membros (nomes/e-mails → borrar tbody)
  console.log('\n--- Equipe Membros ---');
  await page.goto('https://os.imobiturbo.com.br/app/team', { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: 'table tbody { filter: blur(6px); }' });
  await shot(page, 'equipe', '01-membros-equipe.png');

  // Equipe — Atendimento (SLA)
  console.log('\n--- Equipe Atendimento ---');
  await page.click('button:has-text("Atendimento")').catch(() => {});
  await page.waitForTimeout(1200);
  await shot(page, 'equipe', '02-atendimento-sla.png');
  await page.reload({ waitUntil: 'networkidle' });

  // Desempenho
  console.log('\n--- Desempenho ---');
  await page.goto('https://os.imobiturbo.com.br/app/metrics', { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: 'table tbody { filter: blur(6px); }' });
  await shot(page, 'desempenho', '01-desempenho-funil.png');
  await page.reload({ waitUntil: 'networkidle' });

  // Evolução da IA
  console.log('\n--- Evolução da IA ---');
  await page.goto('https://os.imobiturbo.com.br/app/ai/evolution', { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: '[data-testid="gap-item"] { filter: blur(6px); }' });
  await shot(page, 'agentes-ia', '09-evolucao-da-ia.png');
  await page.reload({ waitUntil: 'networkidle' });

  // LGPD — Solicitações
  console.log('\n--- LGPD ---');
  await page.goto('https://os.imobiturbo.com.br/app/lgpd/requests', { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: 'table tbody { filter: blur(6px); }' });
  await shot(page, 'lgpd', '01-solicitacoes-lgpd.png');
  await page.reload({ waitUntil: 'networkidle' });

  // Webhooks — aba Automações (regras QUANDO/SE/ENTÃO)
  console.log('\n--- Webhooks Automações ---');
  await page.goto('https://os.imobiturbo.com.br/app/webhooks', { waitUntil: 'networkidle' });
  await page.click('button:has-text("Automações")').catch(() => {});
  await page.waitForTimeout(1200);
  await shot(page, 'webhooks', '01-automacoes-regras.png');
  await page.reload({ waitUntil: 'networkidle' });

  // Conexões — Templates da Meta (subaba)
  console.log('\n--- Templates da Meta ---');
  await page.goto('https://os.imobiturbo.com.br/app/connections?aba=oficial&sub=templates', { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: 'code { filter: blur(6px); } span.font-mono { filter: blur(6px); }' });
  await shot(page, 'conexoes', '09-templates-da-meta.png');

  await browser.close();
  console.log('\nDone.');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});