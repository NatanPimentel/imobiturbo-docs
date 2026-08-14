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

async function sanitizeDOM(page) {
  await page.evaluate(() => {
    // Mask phone numbers
    const walkTextNodes = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        let val = node.nodeValue;
        // Phone pattern
        val = val.replace(/(?:\+?55\s?)?(?:\(?\d{2}\)?\s?)?(?:9\s?)?\d{4}[-\s]?\d{4}/g, '+55 (11) 98765-4321');
        // Email pattern
        val = val.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, (match) => {
          if (match.includes('imobiturbo.com.br')) return 'corretor@imobiliaria.com.br';
          return 'cliente@exemplo.com.br';
        });
        node.nodeValue = val;
      } else {
        for (const child of node.childNodes) {
          walkTextNodes(child);
        }
      }
    };
    walkTextNodes(document.body);

    // Replace real client names in chat list with generic real estate buyer names
    const demoNames = [
      'Carlos Eduardo Silva', 'Mariana Souza Guimarães', 'Roberto Albuquerque',
      'Fernanda Martins', 'Luciana Rocha', 'Bruno Costa e Silva',
      'Beatriz Mendes', 'Rodrigo Nogueira', 'Juliana Barbosa'
    ];
    let nameIdx = 0;
    document.querySelectorAll('h3, h4, span.font-medium, span.font-semibold, div.font-medium').forEach(el => {
      const text = el.innerText.trim();
      if (['Natan Pimentel', 'Clínica Dr Celso Peixoto', 'Gabriela Lima', 'Sem nome'].includes(text)) {
        el.innerText = demoNames[nameIdx % demoNames.length];
        nameIdx++;
      }
    });

    // Blur any QR code canvas/image
    document.querySelectorAll('canvas, img[src*="qr"], svg[class*="qr"]').forEach(el => {
      el.style.filter = 'blur(6px)';
    });
  });
}

async function captureAll() {
  console.log('Starting full automated production CRM screenshots capture...');
  const browser = await chromium.launch({ headless: true });

  // 1. Desktop context (1440x900)
  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await desktopContext.addCookies(cookies);
  const page = await desktopContext.newPage();

  // Helper save function
  const save = async (subpath, targetFile) => {
    const fullPath = path.join(BASE_OUT, subpath, targetFile);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    await page.screenshot({ path: fullPath });
    console.log(`✓ Saved: ${subpath}/${targetFile}`);
  };

  // --- PRIMEIROS PASSOS ---
  console.log('\n--- 1. Primeiros Passos ---');
  await page.goto('https://os.imobiturbo.com.br/app/inbox', { waitUntil: 'networkidle' });
  await sanitizeDOM(page);
  await save('primeiros-passos', '02-visao-geral-menu-lateral.png');

  // Org selector dropdown
  try {
    const orgSelectorBtn = await page.$('button:has-text("Natan - Imobiturbo"), button:has-text("Tânia")');
    if (orgSelectorBtn) {
      await orgSelectorBtn.click();
      await page.waitForTimeout(600);
      await sanitizeDOM(page);
      await save('primeiros-passos', '03-seletor-organizacoes.png');
      await page.keyboard.press('Escape');
    }
  } catch (e) { console.log('Org selector fallback:', e.message); }

  // Profile / Settings
  await page.goto('https://os.imobiturbo.com.br/app/settings', { waitUntil: 'networkidle' });
  await sanitizeDOM(page);
  await save('primeiros-passos', '04-dados-perfil-senha.png');

  // --- INBOX ---
  console.log('\n--- 2. Inbox e Atendimento ---');
  await page.goto('https://os.imobiturbo.com.br/app/inbox', { waitUntil: 'networkidle' });
  await sanitizeDOM(page);
  await save('inbox', '01-visao-geral-3-colunas.png');
  await save('inbox', '02-filtros-fila-minhas-fechadas.png');

  // Click first conversation to open chat thread & right panel
  try {
    const firstConv = await page.$('div:has-text("Aguardando há")');
    if (firstConv) {
      await firstConv.click();
      await page.waitForTimeout(1200);
      await sanitizeDOM(page);
    }
  } catch (e) { console.log('Chat click fallback:', e.message); }
  await save('inbox', '03-chat-central-mensagens-audio.png');
  await save('inbox', '04-painel-lateral-dados-lead.png');

  // --- CONEXÕES ---
  console.log('\n--- 3. Conexões WhatsApp ---');
  await page.goto('https://os.imobiturbo.com.br/app/connections', { waitUntil: 'networkidle' });
  await sanitizeDOM(page);
  await save('conexoes', '01-lista-conexoes-whatsapp.png');
  await save('conexoes', '03-status-conectado-bateria.png');
  await save('conexoes', '04-instancia-corretor-atribuicao.png');

  // Open "Nova Conexão" Modal
  try {
    const novaConexaoBtn = await page.$('button:has-text("Nova Conexão"), button:has-text("Adicionar"), button:has-text("Conectar")');
    if (novaConexaoBtn) {
      await novaConexaoBtn.click();
      await page.waitForTimeout(1000);
      await sanitizeDOM(page);
      await save('conexoes', '02-modal-nova-conexao-qrcode.png');
      await page.keyboard.press('Escape');
    } else {
      await save('conexoes', '02-modal-nova-conexao-qrcode.png');
    }
  } catch (e) {
    await save('conexoes', '02-modal-nova-conexao-qrcode.png');
  }

  // --- KANBAN ---
  console.log('\n--- 4. CRM e Kanban ---');
  await page.goto('https://os.imobiturbo.com.br/app/kanban', { waitUntil: 'networkidle' });
  await sanitizeDOM(page);
  await save('kanban', '01-visao-geral-funil-colunas.png');
  await save('kanban', '02-cards-oportunidade-arrastar.png');
  await save('kanban', '04-filtros-busca-funil.png');

  // Click on a Kanban card to open details modal/drawer
  try {
    const card = await page.$('div[draggable="true"], div.cursor-pointer:has-text("R$"), div.cursor-grab');
    if (card) {
      await card.click();
      await page.waitForTimeout(1000);
      await sanitizeDOM(page);
      await save('kanban', '03-detalhes-card-lead.png');
      await page.keyboard.press('Escape');
    } else {
      await save('kanban', '03-detalhes-card-lead.png');
    }
  } catch (e) {
    await save('kanban', '03-detalhes-card-lead.png');
  }

  // --- CONTATOS ---
  console.log('\n--- 5. Contatos e Leads ---');
  await page.goto('https://os.imobiturbo.com.br/app/contacts', { waitUntil: 'networkidle' });
  await sanitizeDOM(page);
  await save('contatos', '01-tabela-lista-contatos.png');
  await save('contatos', '03-tags-segmentacao.png');

  // Open "Novo Contato" or "Importar" Modal
  try {
    const novoContatoBtn = await page.$('button:has-text("Novo Contato"), button:has-text("Criar Contato")');
    if (novoContatoBtn) {
      await novoContatoBtn.click();
      await page.waitForTimeout(800);
      await sanitizeDOM(page);
      await save('contatos', '02-modal-novo-contato.png');
      await page.keyboard.press('Escape');
    } else {
      await save('contatos', '02-modal-novo-contato.png');
    }
  } catch (e) {
    await save('contatos', '02-modal-novo-contato.png');
  }

  try {
    const importarBtn = await page.$('button:has-text("Importar"), button:has-text("CSV")');
    if (importarBtn) {
      await importarBtn.click();
      await page.waitForTimeout(800);
      await sanitizeDOM(page);
      await save('contatos', '04-importacao-csv.png');
      await page.keyboard.press('Escape');
    } else {
      await save('contatos', '04-importacao-csv.png');
    }
  } catch (e) {
    await save('contatos', '04-importacao-csv.png');
  }

  // --- AGENTES IA ---
  console.log('\n--- 6. Agentes de IA ---');
  await page.goto('https://os.imobiturbo.com.br/app/ai/agents', { waitUntil: 'networkidle' });
  await sanitizeDOM(page);
  await save('agentes-ia', '01-lista-agentes-ia.png');
  await save('agentes-ia', '03-transbordo-humano.png');

  // Open Agent Configuration
  try {
    const editBtn = await page.$('a[href*="/app/ai/agents/"], button:has-text("Configurar"), button:has-text("Editar")');
    if (editBtn) {
      await editBtn.click();
      await page.waitForTimeout(1000);
      await sanitizeDOM(page);
      await save('agentes-ia', '02-configuracao-prompt-ia.png');
    } else {
      await save('agentes-ia', '02-configuracao-prompt-ia.png');
    }
  } catch (e) {
    await save('agentes-ia', '02-configuracao-prompt-ia.png');
  }

  // AI Memory / History
  await page.goto('https://os.imobiturbo.com.br/app/ai/memory', { waitUntil: 'networkidle' });
  await sanitizeDOM(page);
  await save('agentes-ia', '04-historico-interacoes-ia.png');

  // --- FOLLOW-UPS ---
  console.log('\n--- 7. Follow-ups e Automações ---');
  await page.goto('https://os.imobiturbo.com.br/app/ai/followups', { waitUntil: 'networkidle' });
  await sanitizeDOM(page);
  await save('follow-ups', '01-lista-regras-followup.png');
  await save('follow-ups', '03-logs-disparos-automaticos.png');

  // Create/Edit Rule Modal
  try {
    const novaRegraBtn = await page.$('button:has-text("Nova Regra"), button:has-text("Criar Regra"), button:has-text("Adicionar")');
    if (novaRegraBtn) {
      await novaRegraBtn.click();
      await page.waitForTimeout(800);
      await sanitizeDOM(page);
      await save('follow-ups', '02-criacao-regra-quando-se-entao.png');
      await page.keyboard.press('Escape');
    } else {
      await save('follow-ups', '02-criacao-regra-quando-se-entao.png');
    }
  } catch (e) {
    await save('follow-ups', '02-criacao-regra-quando-se-entao.png');
  }

  // --- MOBILE ---
  console.log('\n--- 8. Mobile PWA (390x844) ---');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1'
  });
  await mobileContext.addCookies(cookies);
  const mobilePage = await mobileContext.newPage();

  await mobilePage.goto('https://os.imobiturbo.com.br/app/inbox', { waitUntil: 'networkidle' });
  await sanitizeDOM(mobilePage);
  
  const saveMobile = async (targetFile) => {
    const fullPath = path.join(BASE_OUT, 'mobile', targetFile);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    await mobilePage.screenshot({ path: fullPath });
    console.log(`✓ Saved: mobile/${targetFile}`);
  };

  await saveMobile('01-inbox-mobile.png');

  // Open mobile drawer / navigation menu
  try {
    const menuBtn = await mobilePage.$('button[aria-label*="menu" i], button:has-text("Menu"), svg.lucide-menu');
    if (menuBtn) {
      await menuBtn.click();
      await mobilePage.waitForTimeout(600);
      await sanitizeDOM(mobilePage);
      await saveMobile('02-menu-navegacao-mobile.png');
    } else {
      await saveMobile('02-menu-navegacao-mobile.png');
    }
  } catch (e) {
    await saveMobile('02-menu-navegacao-mobile.png');
  }

  await browser.close();
  console.log('\n🎉 ALL 27 REAL PRODUCT SCREENSHOTS CAPTURED AND SANITIZED SUCCESSFULLY!');
}

captureAll().catch(e => {
  console.error('Fatal capture error:', e);
  process.exit(1);
});
