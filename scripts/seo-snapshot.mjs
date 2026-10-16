// Empreinte SEO de dist/ : une ligne JSON par page (title, description, canonical, robots, h1, types JSON-LD).
// Usage : node scripts/seo-snapshot.mjs dist > snapshot.json ; diff de deux snapshots avant/après refonte.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.argv[2] ?? "dist";
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const pick = (html, re) => (html.match(re)?.[1] ?? "").replace(/\s+/g, " ").trim();
const strip = (s) => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

const out = {};
for (const file of walk(root).filter((f) => f.endsWith(".html")).sort()) {
  const html = readFileSync(file, "utf8");
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => strip(m[1]));
  const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1].trim());
  out["/" + relative(root, file)] = {
    title: pick(html, /<title>([\s\S]*?)<\/title>/),
    description: pick(html, /<meta name="description" content="([^"]*)"/),
    canonical: pick(html, /<link rel="canonical" href="([^"]*)"/),
    robots: pick(html, /<meta name="robots" content="([^"]*)"/),
    h1: h1s,
    jsonld: ld,
  };
}
console.log(JSON.stringify(out, null, 1));
