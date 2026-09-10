-- AURA reviews
-- Run this in Supabase Dashboard -> SQL Editor.

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  fragrance_id text not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  author_name text not null,
  quote text not null check (char_length(quote) between 2 and 500),
  rating integer not null check (rating between 1 and 5),
  created_at timestamptz not null default now()
);

alter table public.reviews enable row level security;

drop policy if exists "Anyone can read reviews" on public.reviews;
create policy "Anyone can read reviews"
on public.reviews for select
using (true);

drop policy if exists "Authenticated users can create their own reviews" on public.reviews;
create policy "Authenticated users can create their own reviews"
on public.reviews for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "Users can update their own reviews" on public.reviews;
create policy "Users can update their own reviews"
on public.reviews for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users can delete their own reviews" on public.reviews;
create policy "Users can delete their own reviews"
on public.reviews for delete
to authenticated
using (auth.uid() = user_id);
