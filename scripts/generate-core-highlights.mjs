import { chromium } from 'playwright';
import fs from 'node:fs';

const cases = [
  {
    input: 'static/img/guias/follow-ups/01-lista-regras-followup.png',
    output: 'static/img/guias/follow-ups/01-lista-regras-followup-destaque.png',
    boxes: [
      { x: 1260, y: 250, w: 130, h: 42, label: '1', title: 'Novo fluxo', color: '#BFD730' },
      { x: 265, y: 305, w: 360, h: 160, label: '2', title: 'Abrir um fluxo', color: '#6FA8FF' },
    ],
  },
  {
    input: 'static/img/guias/agentes-ia/01-lista-agentes-ia.png',
    output: 'static/img/guias/agentes-ia/01-lista-agentes-ia-destaque.png',
    boxes: [{ x: 1250, y: 250, w: 140, h: 42, label: '1', title: 'Novo agente', color: '#BFD730' }],
  },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const item of cases) {
  const source = fs.readFileSync(item.input).toString('base64');
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
