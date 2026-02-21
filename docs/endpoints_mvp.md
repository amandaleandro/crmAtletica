# Endpoints principais (REST – padrão Supabase/Next.js)

## Autenticação
- POST   /api/auth/login
- POST   /api/auth/register
- POST   /api/auth/logout

## Membros
- GET    /api/members
- GET    /api/members/{id}
- POST   /api/members
- PUT    /api/members/{id}
- DELETE /api/members/{id}

## Modalidades/Times
- GET    /api/sports
- GET    /api/teams
- GET    /api/teams/{id}
- POST   /api/teams
- PUT    /api/teams/{id}
- DELETE /api/teams/{id}

## Elenco do Time
- GET    /api/teams/{id}/members
- POST   /api/teams/{id}/members
- DELETE /api/teams/{id}/members/{memberId}

## Treinos
- GET    /api/trainings
- POST   /api/trainings
- PUT    /api/trainings/{id}
- DELETE /api/trainings/{id}

## Presença
- GET    /api/attendance?trainingId={id}
- POST   /api/attendance/checkin

## Eventos
- GET    /api/events
- GET    /api/events/{id}
- POST   /api/events
- PUT    /api/events/{id}
- DELETE /api/events/{id}

## Inscrições em Evento
- GET    /api/events/{id}/registrations
- POST   /api/events/{id}/register
- POST   /api/events/{id}/checkin

## Financeiro
- GET    /api/payments
- POST   /api/payments
- PUT    /api/payments/{id}
- GET    /api/ledger
- POST   /api/ledger

## Patrocínios
- GET    /api/sponsors
- POST   /api/sponsors
- GET    /api/sponsorship_deals
- POST   /api/sponsorship_deals
- PUT    /api/sponsorship_deals/{id}

## Documentos
- GET    /api/documents
- POST   /api/documents

## Mensagens
- GET    /api/messages
- POST   /api/messages

## Dashboards
- GET    /api/dashboard/overview
- GET    /api/dashboard/finance
- GET    /api/dashboard/attendance
- GET    /api/dashboard/sponsorship

## Observações
- Todos os endpoints seguem padrão REST, retornando JSON.
- Autorização via JWT (Supabase Auth ou similar).
- Endpoints podem ser adaptados para GraphQL se preferir.
