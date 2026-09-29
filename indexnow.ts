import { seoData } from './src/data/seoData';

const host = 'generadordenombres.net';
const apiKey = 'c38a1b24e9f74088a29381bf482d8d7b';
const keyLocation = `https://${host}/${apiKey}.txt`;

const staticPages = [
  '/',
  '/sobre-nosotros',
  '/politica-de-privacidad',
  '/terminos-y-condiciones',
  '/contacto'
];

const seoPaths = Object.values(seoData).map(data => data.path);
const urlList = Array.from(new Set([...staticPages, ...seoPaths])).map(p => p === '/' ? `https://${host}/` : `https://${host}${p}`);

const payload = {
  host,
  key: apiKey,
  keyLocation,
  urlList
};

async function submitIndexNow() {
  console.log(`[IndexNow] Preparing to submit ${urlList.length} URLs to IndexNow protocol...`);
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 202) {
      console.log(`[IndexNow] Successfully submitted ${urlList.length} URLs to IndexNow! Status: ${response.status}`);
    } else {
      console.log(`[IndexNow] Submission response status: ${response.status} (Note: IndexNow requires a live domain verification file)`);
    }
  } catch (err: any) {
    console.log(`[IndexNow] Submission offline or pending domain live setup: ${err.message}`);
  }
}

submitIndexNow();
