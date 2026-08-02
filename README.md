# Advancer POW

Personal Proof of Work site — trades + writing.

**Live:** https://advancer-pow.vercel.app

## Features
- Articles + Trades with position ordering
- Optimistic reorder (Save Order button)
- Dark / Light mode
- Trade dates + 2 images per trade/update with swipe
- Pin trades, Export CSV, Image lightbox
- Drag & drop reorder in admin
- Reviews system
- Status icons (Open / Win / Loss)

## Required Supabase columns
```sql
alter table trades add column if not exists trade_date timestamptz;
alter table trades add column if not exists chart_image_2 text;
alter table trades add column if not exists pinned boolean default false;
alter table trade_updates add column if not exists chart_image_2 text;

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  review text not null,
  created_at timestamptz default now()
);
alter table reviews enable row level security;
create policy "Anyone can submit reviews" on reviews for insert with check (true);
create policy "Auth can read reviews" on reviews for select using (auth.role() = 'authenticated');
```
