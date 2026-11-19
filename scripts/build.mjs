import { access, cp, mkdir, writeFile } from 'node:fs/promises';
for (const name of ['index.html','style.css','app.js','assets/hero.jpg']) await access(new URL('../dist/'+name, import.meta.url));
await mkdir(new URL('../docs/', import.meta.url), { recursive: true });
await cp(new URL('../dist/', import.meta.url), new URL('../docs/', import.meta.url), { recursive: true });
await writeFile(new URL('../docs/.nojekyll', import.meta.url), '');
console.log('SaMaMoh static site ready in dist/ and GitHub Pages output in docs/');
