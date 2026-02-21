-- Esquema SQL para CRM Atlética Universitária (MVP)
-- Compatível com Supabase/Postgres

CREATE TABLE users (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email text UNIQUE NOT NULL,
    password_hash text NOT NULL,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE roles (
    id serial PRIMARY KEY,
    name text UNIQUE NOT NULL
);

CREATE TABLE members (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES users(id),
    name text NOT NULL,
    course text,
    period text,
    phone text,
    status text DEFAULT 'ativo',
    tags text[],
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

CREATE TABLE member_roles (
    member_id uuid REFERENCES members(id),
    role_id int REFERENCES roles(id),
    PRIMARY KEY (member_id, role_id)
);

CREATE TABLE sports (
    id serial PRIMARY KEY,
    name text NOT NULL,
    category text,
    coach text,
    created_at timestamp DEFAULT now()
);

CREATE TABLE teams (
    id serial PRIMARY KEY,
    sport_id int REFERENCES sports(id),
    name text NOT NULL,
    category text,
    created_at timestamp DEFAULT now()
);

CREATE TABLE team_members (
    team_id int REFERENCES teams(id),
    member_id uuid REFERENCES members(id),
    role text,
    joined_at timestamp DEFAULT now(),
    PRIMARY KEY (team_id, member_id)
);

CREATE TABLE trainings (
    id serial PRIMARY KEY,
    team_id int REFERENCES teams(id),
    date date NOT NULL,
    location text,
    description text
);

CREATE TABLE attendance (
    id serial PRIMARY KEY,
    training_id int REFERENCES trainings(id),
    member_id uuid REFERENCES members(id),
    present boolean DEFAULT false,
    checked_in_at timestamp
);

CREATE TABLE events (
    id serial PRIMARY KEY,
    name text NOT NULL,
    date date NOT NULL,
    location text,
    description text,
    created_by uuid REFERENCES users(id),
    created_at timestamp DEFAULT now()
);

CREATE TABLE event_registrations (
    id serial PRIMARY KEY,
    event_id int REFERENCES events(id),
    member_id uuid REFERENCES members(id),
    status text DEFAULT 'inscrito',
    check_in boolean DEFAULT false,
    check_in_at timestamp
);

CREATE TABLE payments (
    id serial PRIMARY KEY,
    member_id uuid REFERENCES members(id),
    event_id int REFERENCES events(id),
    amount numeric(10,2) NOT NULL,
    due_date date,
    paid boolean DEFAULT false,
    paid_at timestamp,
    proof_url text
);

CREATE TABLE ledger_entries (
    id serial PRIMARY KEY,
    type text NOT NULL, -- entrada/saida
    description text,
    amount numeric(10,2) NOT NULL,
    date date NOT NULL,
    created_by uuid REFERENCES users(id),
    created_at timestamp DEFAULT now()
);

CREATE TABLE sponsors (
    id serial PRIMARY KEY,
    name text NOT NULL,
    contact text,
    created_at timestamp DEFAULT now()
);

CREATE TABLE sponsorship_deals (
    id serial PRIMARY KEY,
    sponsor_id int REFERENCES sponsors(id),
    status text DEFAULT 'lead', -- lead, proposta, negociacao, fechado, perdido
    value numeric(10,2),
    description text,
    created_at timestamp DEFAULT now()
);

CREATE TABLE documents (
    id serial PRIMARY KEY,
    member_id uuid REFERENCES members(id),
    type text,
    url text,
    valid_until date,
    uploaded_at timestamp DEFAULT now()
);

CREATE TABLE messages (
    id serial PRIMARY KEY,
    member_id uuid REFERENCES members(id),
    type text, -- email, whatsapp, etc
    content text,
    sent_at timestamp DEFAULT now()
);
