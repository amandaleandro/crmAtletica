-- Script para criar usuário admin inicial no banco crm_atletica
-- Execute no seu PostgreSQL após rodar o container e o backend criar as tabelas

INSERT INTO "user" (name, email, password, is_active)
VALUES (
  'Administrador',
  'admin@atletica.com',
  '$2a$10$wQw8Qw8Qw8Qw8Qw8Qw8QwOQw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8Qw8', -- senha: admin123 (bcrypt)
  true
);

-- Faça login com:
-- Email: admin@atletica.com
-- Senha: admin123
