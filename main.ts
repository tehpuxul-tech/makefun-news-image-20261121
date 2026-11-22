// news-image-20261121: a one-day world-news poster for Saturday 21 November 2026.
// The poster is drawn ahead of time (see draw.py) and shipped as entry.png
// beside this file. This program just places that image where the grader
// expects it, at <output>/entry.png, and writes the same bytes every run.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(new URL('./entry.png', import.meta.url));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
