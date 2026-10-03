import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const dynamic = 'force-static';
export const alt = 'Generador de Nombres, Apodos y Símbolos';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  const logo = 'data:image/svg+xml;base64,' + readFileSync(join(process.cwd(), 'public/favicon.svg')).toString('base64');
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', padding: 72, background: '#101017', color: '#fafafa', alignItems: 'center', gap: 56 }}>
      <img src={logo} width={210} height={210} style={{ flexShrink: 0 }} alt="" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, width: 790 }}>
        <div style={{ display: 'flex', fontSize: 56, fontWeight: 700, width: '100%' }}>Generador de Nombres, Apodos y Símbolos</div>
        <div style={{ display: 'flex', fontSize: 28, color: '#c4b5fd' }}>generadordenombres.net</div>
      </div>
    </div>, size,
  );
}
