import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const iconPath = fileURLToPath(new URL('../public/icon-128.png', import.meta.url));
const outputPath = fileURLToPath(new URL('../public/og-image.png', import.meta.url));

const icon = await readFile(iconPath);
const iconData = `data:image/png;base64,${icon.toString('base64')}`;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="8%" cy="8%" r="70%">
      <stop offset="0%" stop-color="#ff3d00" stop-opacity="0.5"/>
      <stop offset="55%" stop-color="#ff3d00" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#ff3d00" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%" stop-color="#ff3d00"/>
      <stop offset="100%" stop-color="#ff8a5c"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.035" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="#12100e"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <g font-family="Noto Sans CJK SC, DejaVu Sans, sans-serif">
    <image href="${iconData}" x="80" y="76" width="128" height="128"/>

    <text x="240" y="146" fill="#f5efe8" font-size="60" font-weight="700" letter-spacing="1">Beyond Translate</text>
    <text x="242" y="194" fill="#ff7a45" font-size="23" font-weight="500" letter-spacing="4">BROWSER TRANSLATION EXTENSION</text>

    <text x="80" y="330" fill="#f5efe8" font-size="46" font-weight="600">让整个互联网，读成你的语言。</text>
    <text x="82" y="382" fill="#a79d93" font-size="27">划词与整页翻译 · 站点规则 · 生词本与存档</text>

    <rect x="80" y="438" width="1040" height="1" fill="#302a24"/>
    <rect x="80" y="438" width="180" height="3" fill="url(#line)"/>

    <text x="80" y="512" fill="#a79d93" font-size="23">Chrome · Edge · Firefox</text>
    <text x="80" y="552" fill="#7c736a" font-size="21">beyond-translate.xinlu.ink</text>

    <text x="1120" y="540" fill="#453c33" font-size="96" font-weight="700" text-anchor="end">BT</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(outputPath);
console.log(`Wrote ${outputPath}`);
