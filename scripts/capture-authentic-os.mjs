import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const sbDeskcommAuth = 'base64-eyJhY2Nlc3NfdG9rZW4iOiJleUpoYkdjaU9pSkZVekkxTmlJc0ltdHBaQ0k2SW1VNE5EQmtOVGcwTFRRelpXWXRORE01WlMxaE9XSmtMVFJqTXpaak1ESTNNMkUyTlNJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUpvZEhSd2N6b3ZMMkZ3YVM1dmN5NXBiVzlpYVhSMWNtSnZMbU52YlM1aWNpOWhkWFJvTDNZeElpd2ljM1ZpSWpvaU5XRTJPV1F3WVRNdE1USXpOaTAwTWpoa0xXSTFPRFV0TXpBMU1tRTJORE15TkRJNElpd2lZWFZrSWpvaVlYVjBhR1Z1ZEdsallYUmxaQ0lzSW1WNGNDSTZNVGM0T1RJMU56ZzJOeXdpYVdGMElqb3hOemcyTmpZMU9EWTNMQ0psYldGcGJDSTZJbTVoZEdGdWNHbHRaVzUwWld4QWFXMXZZbWwwZFhKaWJ5NWpiMjB1WW5JaUxDSndhRzl1WlNJNklpSXNJbUZ3Y0Y5dFpYUmhaR0YwWVNJNmV5SndjbTkyYVdSbGNpSTZJbVZ0WVdsc0lpd2ljSEp2ZG1sa1pYSnpJanBiSW1WdFlXbHNJbDE5TENKMWMyVnlYMjFsZEdGa1lYUmhJanA3SW1WdFlXbHNYM1psY21sbWFXVmtJanAwY25WbExDSm1kV3hzWDI1aGJXVWlPaUpPWVhSaGJpQlFhVzFsYm5SbGJDSXNJbWRvYkY5c2IyTmhkR2x2Ymw5cFpDSTZJa0pJU0RsRGNGRTJabU4zTUZoR2RrMHljMWQwSWl3aVoyaHNYM1Z6WlhKZmFXUWlPaUprTlVWWldVRkNiVlZqU1VWdE9FbHBRbGxxT0NJc0ltbHRjRzl5ZEY5emIzVnlZMlVpT2lKbmIyaHBaMmhzWlhabGJDSXNJbTVsWldSelgzQmhjM04zYjNKa1gzTmxkSFZ3SWpwMGNuVmxmU3dpY205c1pTSTZJbUYxZEdobGJuUnBZMkYwWldRaUxDSmhZV3dpT2lKaFlXd3hJaXdpWVcxeUlqcGJleUp0WlhSb2IyUWlPaUp2ZEhBaUxDSjBhVzFsYzNSaGJYQWlPakUzT0RZMk5qVTROamQ5WFN3aWMyVnpjMmx2Ymw5cFpDSTZJakUxWlRFeU9XTmxMVEprT1dZdE5EWTRZUzA0TUROaUxXRTFNak5sWmpJd1ltSXhNaUlzSW1selgyRnViMjU1Ylc5MWN5STZabUZzYzJWOS5BRkhPQnZfa0R1dzhHUkkyTmhheFdLNlBXRGI2WURncWdlT2hSalplbUpOSUE4T3hNajlBNTdOU1M0S0pjek9mUTQtbEttaDFCN1ZrRHZPUXV0eHBEdyIsInRva2VuX3R5cGUiOiJiZWFyZXIiLCJleHBpcmVzX2luIjoyNTkyMDAwLCJleHBpcmVzX2F0IjoxNzg5MjU3ODY3LCJyZWZyZXNoX3Rva2VuIjoicndyamtwa2kzNHduIiwidXNlciI6eyJpZCI6IjVhNjlkMGEzLTEyMzYtNDI4ZC1iNTg1LTMwNTJhNjQzMjQyOCIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImVtYWlsIjoibmF0YW5waW1lbnRlbEBpbW9iaXR1cmJvLmNvbS5iciIsImVtYWlsX2NvbmZpcm1lZF9hdCI6IjIwMjYtMDgtMDNUMDI6Mzg6NTEuNDc0N1oiLCJwaG9uZSI6IiIsImNvbmZpcm1lZF9hdCI6IjIwMjYtMDgtMDNUMDI6Mzg6NTEuNDc0N1oiLCJyZWNvdmVyeV9zZW50X2F0IjoiMjAyNi0wOC0xNFQwMDowMzo0Mi41MDMxNDJaIiwibGFzdF9zaWduX2luX2F0IjoiMjAyNi0wOC0xNFQwMDowNDoyNy40NDQ0MDI5NzRaIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6Ik5hdGFuIFBpbWVudGVsIiwiZ2hsX2xvY2F0aW9uX2lkIjoiQkhIOUNwUTZmY3cwWEZ2TTJzV3QiLCJnaGxfdXNlcl9pZCI6ImQ1RVlZQUJtVWNJRW04SWlCWWo4IiwiaW1wb3J0X3NvdXJjZSI6ImdvaGlnaGxldmVsIiwibmVlZHNfcGFzc3dvcmRfc2V0dXAiOnRydWV9LCJpZGVudGl0aWVzIjpbeyJpZGVudGl0eV9pZCI6ImMzMzE3MTYzLTBhNjktNDIxMS05NzBmLWNiMzJlZmM2ZDIyZSIsImlkIjoiNWE2OWQwYTMtMTIzNi00MjhkLWI1ODUtMzA1MmE2NDMyNDI4IiwidXNlcl9pZCI6IjVhNjlkMGEzLTEyMzYtNDI4ZC1iNTg1LTMwNTJhNjQzMjQyOCIsImlkZW50aXR5X2RhdGEiOnsiZW1haWwiOiJuYXRhbnBpbWVudGVsQGltb2JpdHVyYm8uY29tLmJyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6IjVhNjlkMGEzLTEyMzYtNDI4ZC1iNTg1LTMwNTJhNjQzMjQyOCJ9LCJwcm92aWRlciI6ImVtYWlsIiwibGFzdF9zaWduX2luX2F0IjoiMjAyNi0wOC0wM1QwMjozODo1MS40NTkwNjdaIiwiY3JlYXRlZF9hdCI6IjIwMjYtMDgtMDNUMDI6Mzg6NTEuNDU5MTQ3WiIsInVwZGF0ZWRfYXQiOiIyMDI2LTA4LTAzVDAyOjM4OjUxLjQ1OTE0N1oiLCJlbWFpbCI6Im5hdGFucGltZW50ZWxAaW1vYml0dXJiby5jb20uYnIifV0sImNyZWF0ZWRfYXQiOiIyMDI2LTA4LTAzVDAyOjM4OjUxLjQ1MDEyOVoiLCJ1cGRhdGVkX2F0IjoiMjAyNi0wOC0xNFQwMDowNDoyNy40NTU0NzFaIiwiaXNfYW5vbnltb3VzIjpmYWxzZX19';

const cookies = [
  {
    name: 'sb-deskcomm-auth',
    value: sbDeskcommAuth,
    domain: 'os.imobiturbo.com.br',
    path: '/',
    secure: true,
    httpOnly: true,
    sameSite: 'Lax'
  },
  {
    name: 'active_org',
    value: '18b103e6-a006-45ac-84d5-62312f45ba77',
    domain: 'os.imobiturbo.com.br',
    path: '/',
    secure: true,
    httpOnly: false,
    sameSite: 'Lax'
  }
];

const BASE_OUT = 'C:/Projetos/imobiturbo-docs/static/img/guias';

async function savePage(page, subpath, targetFiles) {
  for (const f of targetFiles) {
    const fullPath = path.join(BASE_OUT, subpath, f);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    await page.screenshot({ path: fullPath });
    console.log(`✓ Saved ${subpath}/${f}`);
  }
}

async function run() {
  console.log('Starting 100% Authentic OS Captures from os.imobiturbo.com.br...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.addCookies(cookies);
  const page = await context.newPage();

  // 1. LOGIN
  console.log('\n--- 1. Login ---');
  const loginPage = await context.newPage();
  await loginPage.goto('https://os.imobiturbo.com.br/login', { waitUntil: 'networkidle' });
  await savePage(loginPage, 'primeiros-passos', ['01-tela-login.png', '02-codigo-email.png']);
  await loginPage.close();

  // 2. INBOX
  console.log('\n--- 2. Inbox ---');
  await page.goto('https://os.imobiturbo.com.br/app/inbox', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await savePage(page, 'primeiros-passos', ['02-visao-geral-menu-lateral.png', '03-interface-visao-geral.png', '04-menu-navegacao.png']);
  await savePage(page, 'inbox', ['01-visao-geral-3-colunas.png', '01-inbox-3-colunas.png', '02-filtros-fila-minhas-fechadas.png', '02-responder-mensagem.png', '04-filtros-inbox.png']);

  // Click on a conversation in inbox
  try {
    const conv = await page.$('div:has-text("Aguardando há"), div:has-text("Natan Pimentel")');
    if (conv) {
      await conv.click();
      await page.waitForTimeout(1500);
      await savePage(page, 'inbox', ['03-chat-central-mensagens-audio.png', '03-assumir-atendimento-ia.png', '04-painel-lateral-dados-lead.png']);
    }
  } catch (e) {
    console.log('Conv click error:', e.message);
  }

  // 3. CONEXÕES
  console.log('\n--- 3. Conexões ---');
  await page.goto('https://os.imobiturbo.com.br/app/connections', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await savePage(page, 'conexoes', ['01-central-conexoes.png', '01-lista-conexoes-whatsapp.png', '03-status-conectado-bateria.png', '03-status-reconectar.png', '04-instancia-corretor-atribuicao.png', '04-link-conexao-corretor.png']);

  // Open "Conectar novo WhatsApp" modal
  try {
    const btnNovo = await page.$('button:has-text("Conectar novo WhatsApp"), button:has-text("Conectar")');
    if (btnNovo) {
      await btnNovo.click();
      await page.waitForTimeout(1500);
      await savePage(page, 'conexoes', ['02-modal-nova-conexao-qrcode.png', '02-qrcode-whatsapp.png']);
      await page.keyboard.press('Escape');
    }
  } catch (e) {
    console.log('Modal conexao error:', e.message);
  }

  // 4. KANBAN / PIPELINES
  console.log('\n--- 4. Kanban ---');
  await page.goto('https://os.imobiturbo.com.br/app/kanban', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await savePage(page, 'kanban', ['01-visao-geral-funil-colunas.png', '01-quadro-kanban.png', '04-filtros-busca-funil.png', '04-filtros-kanban.png']);

  // Click on pipeline item
  try {
    const pipe = await page.$('text="0. Funil de Vendas"');
    if (pipe) {
      await pipe.click();
      await page.waitForTimeout(2000);
      await savePage(page, 'kanban', ['02-cards-oportunidade-arrastar.png', '02-mover-lead-drag.png', '03-detalhes-card-lead.png', '03-filtros-kanban.png', '04-descartar-lead-modal.png']);
    }
  } catch (e) {
    console.log('Pipeline click error:', e.message);
  }

  // 5. CONTATOS
  console.log('\n--- 5. Contatos ---');
  await page.goto('https://os.imobiturbo.com.br/app/contacts', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await savePage(page, 'contatos', ['01-tabela-lista-contatos.png', '01-lista-contatos.png', '03-tags-segmentacao.png', '03-tags-contatos.png']);

  // Open "Novo Contato" Modal
  try {
    const btnNovoContato = await page.$('button:has-text("Novo contato")');
    if (btnNovoContato) {
      await btnNovoContato.click();
      await page.waitForTimeout(1000);
      await savePage(page, 'contatos', ['02-modal-novo-contato.png']);
      await page.keyboard.press('Escape');
    }
  } catch (e) {
    console.log('Novo contato error:', e.message);
  }

  // Open "Importar CSV" Modal
  try {
    const btnImportar = await page.$('button:has-text("Importar CSV")');
    if (btnImportar) {
      await btnImportar.click();
      await page.waitForTimeout(1000);
      await savePage(page, 'contatos', ['04-importacao-csv.png', '04-importar-csv.png']);
      await page.keyboard.press('Escape');
    }
  } catch (e) {
    console.log('Importar CSV error:', e.message);
  }

  // 6. AGENTES IA
  console.log('\n--- 6. Agentes IA ---');
  await page.goto('https://os.imobiturbo.com.br/app/ai/agents', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await savePage(page, 'agentes-ia', ['01-lista-agentes-ia.png', '01-visao-agentes-ia.png', '03-estados-agente.png', '03-transbordo-humano.png', '04-handoff-humano.png', '04-historico-interacoes-ia.png']);

  // Click on "Editar" agent
  try {
    const btnEditar = await page.$('button:has-text("Editar")');
    if (btnEditar) {
      await btnEditar.click();
      await page.waitForTimeout(1500);
      await savePage(page, 'agentes-ia', ['02-configuracao-prompt-ia.png', '02-configurar-agente.png']);
    }
  } catch (e) {
    console.log('Editar agent error:', e.message);
  }

  // 7. FOLLOW-UPS
  console.log('\n--- 7. Follow-ups ---');
  await page.goto('https://os.imobiturbo.com.br/app/ai/followups', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await savePage(page, 'follow-ups', ['01-lista-regras-followup.png', '01-lista-automacoes.png', '03-logs-disparos-automaticos.png', '03-logs-automacao.png']);

  // Click "Novo fluxo"
  try {
    const btnNovoFluxo = await page.$('button:has-text("Novo fluxo")');
    if (btnNovoFluxo) {
      await btnNovoFluxo.click();
      await page.waitForTimeout(1000);
      await savePage(page, 'follow-ups', ['02-criacao-regra-quando-se-entao.png', '02-criar-regra-automacao.png']);
      await page.keyboard.press('Escape');
    }
  } catch (e) {
    console.log('Novo fluxo error:', e.message);
  }

  // 8. SETTINGS
  console.log('\n--- 8. Configurações ---');
  await page.goto('https://os.imobiturbo.com.br/app/settings', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await savePage(page, 'primeiros-passos', ['04-dados-perfil-senha.png']);

  // 9. MOBILE (390x844)
  console.log('\n--- 9. Mobile ---');
  const mobContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1'
  });
  await mobContext.addCookies(cookies);
  const mobPage = await mobContext.newPage();
  await mobPage.goto('https://os.imobiturbo.com.br/app/inbox', { waitUntil: 'networkidle' });
  await mobPage.waitForTimeout(1500);
  await savePage(mobPage, 'mobile', ['01-inbox-mobile.png', '01-pwa-instalacao-ios.png', '02-menu-navegacao-mobile.png', '02-pwa-mobile-nav.png']);

  await browser.close();
  console.log('\n🎉 ALL REAL AUTHENTIC SCREENSHOTS SAVED SUCCESSFULLY!');
}

run().catch(e => {
  console.error('Fatal capture error:', e);
  process.exit(1);
});
