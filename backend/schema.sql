-- Skema database: Platform Pengelolaan Tugas dan Pengingat Tenggat Waktu
-- Dijalankan di Supabase SQL Editor

-- PB-01: Tabel
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  created_at timestamptz not null default now()
);

create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  title text not null,
  course text,
  deadline timestamptz not null,
  status text not null default 'belum' check (status in ('belum', 'sedang', 'selesai')),
  reminder_days integer not null default 3 check (reminder_days >= 0),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.tasks enable row level security;

-- PB-02: Aturan akses (pengguna hanya mengakses data miliknya)
create policy "profiles_select_own" on public.profiles
  for select to authenticated
  using ((select auth.uid()) = id);

create policy "profiles_insert_own" on public.profiles
  for insert to authenticated
  with check ((select auth.uid()) = id);

create policy "profiles_update_own" on public.profiles
  for update to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

create policy "tasks_select_own" on public.tasks
  for select to authenticated
  using ((select auth.uid()) = user_id);

create policy "tasks_insert_own" on public.tasks
  for insert to authenticated
  with check ((select auth.uid()) = user_id);

create policy "tasks_update_own" on public.tasks
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "tasks_delete_own" on public.tasks
  for delete to authenticated
  using ((select auth.uid()) = user_id);