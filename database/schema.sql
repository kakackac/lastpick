-- Initial PostgreSQL schema draft for Neighborhood Save Box.

create table stores (
  id uuid primary key,
  name text not null,
  category text not null,
  phone text,
  address text not null,
  latitude numeric(10, 7),
  longitude numeric(10, 7),
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table sellers (
  id uuid primary key,
  store_id uuid not null references stores(id),
  name text not null,
  phone text not null,
  email text,
  role text not null default 'owner',
  created_at timestamptz not null default now()
);

create table save_boxes (
  id uuid primary key,
  store_id uuid not null references stores(id),
  category text not null,
  title text not null,
  description text,
  original_price integer not null,
  sale_price integer not null,
  quantity_total integer not null,
  quantity_remaining integer not null,
  pickup_starts_at timestamptz not null,
  pickup_ends_at timestamptz not null,
  storage_note text,
  allergy_note text,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (original_price >= sale_price),
  check (quantity_total >= 0),
  check (quantity_remaining >= 0)
);

create table orders (
  id uuid primary key,
  save_box_id uuid not null references save_boxes(id),
  buyer_id uuid not null,
  quantity integer not null default 1,
  total_amount integer not null,
  status text not null default 'pending_payment',
  pickup_code text not null unique,
  paid_at timestamptz,
  picked_up_at timestamptz,
  canceled_at timestamptz,
  created_at timestamptz not null default now(),
  check (quantity > 0)
);

create table payments (
  id uuid primary key,
  order_id uuid not null references orders(id),
  provider text not null,
  provider_payment_key text,
  amount integer not null,
  status text not null default 'ready',
  approved_at timestamptz,
  created_at timestamptz not null default now()
);

create table settlements (
  id uuid primary key,
  store_id uuid not null references stores(id),
  settlement_period_start date not null,
  settlement_period_end date not null,
  gross_amount integer not null,
  platform_fee integer not null,
  payment_fee integer not null,
  payout_amount integer not null,
  status text not null default 'scheduled',
  created_at timestamptz not null default now()
);

create table reviews (
  id uuid primary key,
  order_id uuid not null references orders(id),
  store_id uuid not null references stores(id),
  buyer_id uuid not null,
  rating integer not null,
  comment text,
  created_at timestamptz not null default now(),
  check (rating between 1 and 5)
);

