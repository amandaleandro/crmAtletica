# CRM Atlética Universitária – Backend

Este projeto é o backend do CRM para gestão de Atlética universitária, desenvolvido em Node.js com NestJS, TypeORM e Postgres.

## Módulos principais
- users (autenticação)
- members (dados dos membros)
- roles (papéis e permissões)
- teams (modalidades/times)
- events (eventos)
- payments (financeiro)
- sponsors (patrocínios)

## Funcionalidades
- Autenticação JWT
- RBAC básico
- API RESTful
- Pronto para rodar via Docker Compose

## Como rodar
1. Instale as dependências: `npm install`
2. Configure o banco de dados no arquivo `.env`
3. Suba o Postgres (ex: `docker-compose up -d`)
4. Rode o backend: `npm run start:dev`

---

Este README será atualizado conforme o desenvolvimento avança.