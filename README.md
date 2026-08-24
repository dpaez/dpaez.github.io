# D Ξ K Δ

Personal site of [Diego Paez](https://deka.build) — portfolio, talks, and writing.

Built with **Astro**, **React**, **Tailwind**, and [`local-components`](https://github.com/dpaez/local-components). Deployed on **Cloudflare**.

## Stack

| Layer      | Choice             |
| ---------- | ------------------ |
| Framework  | Astro 6 + MDX      |
| UI         | React + Tailwind 4 |
| Components | local-components   |
| Host       | Cloudflare Workers |
| Tooling    | Bun, oxlint, oxfmt |

## Commands

```sh
bun install
bun run dev          # http://localhost:4321
bun run build
bun run preview
bun run deploy       # wrangler deploy
bun run check        # typecheck + lint + format
```
