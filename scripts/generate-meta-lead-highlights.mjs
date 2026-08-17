import { chromium } from 'playwright';
import fs from 'node:fs';

const input = 'static/img/guias/conexoes/06-formularios-meta.png';
const source = fs.readFileSync(input).toString('base64');
const cases = [
  {
    output: 'static/img/guias/conexoes/06-formularios-meta-conectar-destaque.png',
    boxes: [{ x: 307, y: 728, w: 119, h: 37, label: '1', title: 'Conectar Facebook', color: '#BFD730' }],
  },
  {
    output: 'static/img/guias/conexoes/06-formularios-meta-token-destaque.png',
    boxes: [{ x: 289, y: 233, w: 590, h: 321, label: '1', title: 'Access token e Validar token', color: '#6FA8FF' }],
  },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const item of cases) {
  await page.setContent(`<!doctype html><style>
    * { box-sizing: border-box; }
    html, body { margin: 0; width: 1440px; height: 900px; overflow: hidden; background: #000; }
    img { display: block; width: 1440px; height: 900px; }
    .box { position: absolute; border: 4px solid; border-radius: 10px; box-shadow: 0 0 0 9999px rgba(0,0,0,.24), 0 0 22px currentColor; }
    .badge { position: absolute; left: -18px; top: -18px; width: 36px; height: 36px; border: 2px solid white; border-radius: 50%; display: grid; place-items: center; color: #000; font: 900 17px Arial; }
    .tag { position: absolute; left: 0; bottom: -36px; padding: 6px 10px; border-left: 4px solid; border-radius: 6px; background: rgba(10,10,10,.94); color: #fff; white-space: nowrap; font: 800 13px Arial; }
  </style><img src="data:image/png;base64,${source}">${item.boxes.map((box) => `<div class="box" style="left:${box.x}px;top:${box.y}px;width:${box.w}px;height:${box.h}px;color:${box.color};border-color:${box.color}"><span class="badge" style="background:${box.color}">${box.label}</span><span class="tag" style="border-color:${box.color}">${box.title}</span></div>`).join('')}`);
  await page.screenshot({ path: item.output });
  console.log(`created ${item.output}`);
}

await browser.close();
