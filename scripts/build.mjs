import { access } from 'node:fs/promises';
for (const name of ['index.html','style.css','app.js','assets/hero.jpg']) await access(new URL('../dist/'+name, import.meta.url));
console.log('SaMaMoh static site ready in dist/');
