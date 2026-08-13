import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROFILE_DIR = 'C:\\Users\\Natan\\.imobiturbo-docs-profile';
const BASE_URL = 'https://os.imobiturbo.com.br';
const OUTPUT_DIR = path.resolve(__dirname, '../static/img/guias');

async function main() {
  console.log(`Starting headless inspection at ${BASE_URL}...`);
  console.log(`Profile dir: ${PROFILE_DIR}`);

  if (!fs.existsSync(PROFILE_DIR)) {
    fs.mkdirSync(PROFILE_DIR, { recursive: true });
  }

  const context = await chromium.launchPersistentContext(PROFILE_DIR, {
    headless: true,
    viewport: { width: 1440, height: 900 },
    channel: 'chrome',
  });

  const page = await context.newPage();
  
  try {
    console.log(`Navigating to ${BASE_URL}...`);
    const response = await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 30000 });
    console.log(`Current URL: ${page.url()} | Status: ${response ? response.status() : 'none'}`);

    const title = await page.title();
    console.log(`Page title: ${title}`);

    // Create directories
    const dirs = [
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

    for (const d of dirs) {
      const fullDir = path.join(OUTPUT_DIR, d);
      if (!fs.existsSync(fullDir)) {
        fs.mkdirSync(fullDir, { recursive: true });
      }
    }

    // Capture login screen
    const loginScreenshotPath = path.join(OUTPUT_DIR, 'primeiros-passos', '01-tela-login.png');
    await page.screenshot({ path: loginScreenshotPath, fullPage: false });
    console.log(`Saved screenshot: ${loginScreenshotPath}`);

    // Check DOM elements on the page
    const bodyText = await page.evaluate(() => document.body.innerText);
    console.log(`Page text excerpt: ${bodyText.slice(0, 300)}...`);

  } catch (err) {
    console.error('Error during capture:', err);
  } finally {
    await context.close();
  }
}

main();
