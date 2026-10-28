// Compare deux empreintes SEO (seo-snapshot.mjs). Code de sortie 1 si une page existante a changé ou disparu.
// Usage : node scripts/seo-diff.mjs design/seo-before.json design/seo-after.json
import { readFileSync } from "node:fs";
const [a, b] = process.argv.slice(2).map((f) => JSON.parse(readFileSync(f, "utf8")));
let bad = 0;
for (const [page, before] of Object.entries(a)) {
  const after = b[page];
  if (!after) { console.log(`DISPARUE  ${page}`); bad++; continue; }
  for (const k of Object.keys(before)) {
    if (JSON.stringify(before[k]) !== JSON.stringify(after[k])) {
      console.log(`CHANGÉ    ${page} [${k}]\n  avant : ${JSON.stringify(before[k]).slice(0, 300)}\n  après : ${JSON.stringify(after[k]).slice(0, 300)}`);
      bad++;
    }
  }
}
for (const page of Object.keys(b)) if (!a[page]) console.log(`NOUVELLE  ${page}  (${b[page].robots || "index"})`);
console.log(bad ? `${bad} écart(s) sur les pages existantes` : "Aucun écart SEO sur les pages existantes");
process.exit(bad ? 1 : 0);
