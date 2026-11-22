# makefun-news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/tehpuxul-tech/makefun-news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/tehpuxul-tech/makefun-news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One image that sums up the world's news of Saturday 21 November 2026 — a newspaper-style poster with the date in large type and six labelled stories, each with its own panel so a viewer who missed the day can tell what happened from the image alone.

The six stories in the image:

1. **Poland** — Two Russian missiles and a drone fell in south-east Poland; Prime Minister Tusk called it a deliberate provocation and NATO's Mark Rutte called it a grave violation.
2. **Peru** — A magnitude 6.7 earthquake struck central Peru at 00:09 UTC; tremors were felt in Lima and Congress was evacuated, with no casualties or damage immediately reported.
3. **Ukraine** — A Russian strike on Kryvyi Rih killed two people, including a seven-year-old boy, and hurt about 60 in an overnight barrage.
4. **Riyadh** — The Saudi-led coalition intercepted three Houthi ballistic missiles aimed at Riyadh, the third night of alerts in a row.
5. **Antalya** — COP31 climate talks ran into overtime, with nearly 200 countries deadlocked over fossil fuels and the draft deal dropping the phrase.
6. **New York** — Wall Street's AI sell-off deepened: the S&P 500 fell 3.7% and entered correction, and Nvidia slid 14% as the SEC was reported to be probing its accounts.

The image (`entry.png`, 1024×1024) was drawn programmatically with Python/PIL, so every word is exactly as written and stays legible at full size and at small sizes. `main.ts` copies it to the output folder — the program runs with no network and writes the same bytes on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=3zpa4ve3&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
