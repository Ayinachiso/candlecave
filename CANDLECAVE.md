# Candlecave

A private first release of the Candlecave storefront and customer workspace.

## Run locally

- `npm install` (Node 22.13+)
- `npm run dev`
- Open the printed local URL. `/crm` starts the local sign-in flow.
- `npm run build` builds the Cloudflare Worker and client assets.
- `npm run db:generate` generates schema migrations.

The project uses React, TypeScript, Vinext and Cloudflare D1. Hosted access is owner-private. Customer, order and enquiry records are scoped server-side to the authenticated user's ID. Browser storage contains only the theme preference and a temporary shopping bag.

## Main features

Storefront, scent filters and finder, product details, bag quantities, idempotent order requests, about/care/contact pages, light/dark themes. CRM overview, customer search and notes, relationship tags, order history/status, enquiry status and customer CSV export. Read-only sample data is separate from real records.

## Content to replace

`lib/catalog.ts`: product names, prices in NGN, scent descriptions and image paths. These are proposed concepts, not verified products. `public/images/`: licensed stock photography; source and licence information in `credits.json`. Typography is self-hosted DM Sans, with OFL licence in `public/fonts/OFL.txt`.

## Before public launch

- Confirm final product photography, prices, sizes, ingredients, burn times, stock and brand copy.
- Integrate a payment provider, signed webhooks and payment records. This version takes order requests only and never claims a payment succeeded.
- Confirm delivery regions, shipping prices, returns and privacy policies; no invented shipping promise is shown.
- Configure public-storefront versus staff authorization and route public submissions to the business's CRM. The current private release intentionally scopes records to its authenticated owner. Do not simply make it public and assume it is a multi-user retail backend.
- Connect transactional email if desired. Enquiries are saved; no email is sent.

## Validation

TypeScript and production build pass. Local API checks cover anonymous rejection, signed-in loading, authoritative order totals, repeated-request deduplication, customer notes, order status and enquiry persistence, invalid quantities and cross-origin writes. All page routes and representative assets respond successfully. QA records exist only in ignored local D1 storage.

Desktop/mobile browser visual checks and WebMCP runtime validation were unavailable because browser control was not available in the authoring session.
