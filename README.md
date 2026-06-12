# AlphaGene Pet Hope

Global pet medical sponsorship platform for dog care campaigns with veterinary records, transparent budgets, and treatment progress updates.

## Phase 1

- Next.js 14 App Router home page
- Dog listing page with disease, region, urgency, funding, and status filters
- Individual dog campaign pages
- Supabase PostgreSQL schema with RLS policies

## Run locally

Install dependencies with your preferred Node package manager, then run:

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

## Supabase

Run `supabase/schema.sql` in your Supabase SQL editor or migration workflow. The schema includes public read access for published dogs, admin-only write access for cases and medical data, private-by-default medical file handling, and donation tables ready for Stripe webhook writes.

## Medical wording

The public copy avoids guaranteed outcome language. Use terms such as treatment support, investigational personalized protein support, case-based care plan, and veterinary-supervised care unless a specific claim is independently verified.
