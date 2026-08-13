import { chromium } from 'playwright';

const BASE_URL = 'https://imobiturbo-docs.pages.dev';

const URLS_TO_TEST = [
  '/',
  '/docs/primeiros-passos/o-que-e-o-imobiturbo-os',
  '/docs/primeiros-passos/primeiro-acesso',
  '/docs/inbox/visao-geral-inbox',
  '/docs/conexoes/conectar-whatsapp-qrcode',
  '/docs/kanban/entendendo-o-funil',
  '/docs/contatos/visao-geral-contatos',
  '/docs/agentes-ia/o-que-sao-agentes-ia',
  '/docs/follow-ups/visao-geral-automacoes',
  '/docs/aplicativo-mobile/como-instalar-o-pwa',
  '/novidades',
];

async function main() {
  console.log(`Starting live validation against ${BASE_URL}...`);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  let allPassed = true;

  for (const path of URLS_TO_TEST) {
    const fullUrl = `${BASE_URL}${path}`;
    try {
      const resp = await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 15000 });
      const status = resp ? resp.status() : 0;
      const title = await page.title();
      if (status === 200) {
        console.log(`✅ [${status}] ${path} — Title: "${title}"`);
      } else {
        console.error(`❌ [${status}] ${path} — Title: "${title}"`);
        allPassed = false;
      }
    } catch (err) {
      console.error(`❌ Error fetching ${path}:`, err.message);
      allPassed = false;
    }
  }

  // Mobile test
  console.log('\nTesting mobile responsiveness (390x844)...');
  await page.setViewportSize({ width: 390, height: 844 });
  const mobileResp = await page.goto(`${BASE_URL}/docs/primeiros-passos/o-que-e-o-imobiturbo-os`, { waitUntil: 'networkidle' });
  console.log(`✅ Mobile article status: ${mobileResp ? mobileResp.status() : 0}`);

  await browser.close();

  if (allPassed) {
    console.log('\n🎉 All live deployment checks passed with flying colors!');
  } else {
    console.error('\n⚠️ Some checks failed.');
  }
}

main();
