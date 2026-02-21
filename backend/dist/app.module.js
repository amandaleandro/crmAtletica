"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const assets_module_1 = require("./assets/assets.module");
const ui_customization_module_1 = require("./ui-customization/ui-customization.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_entity_1 = require("./modules/user.entity");
const member_entity_1 = require("./modules/member.entity");
const role_entity_1 = require("./modules/role.entity");
const member_role_entity_1 = require("./modules/member_role.entity");
const sport_entity_1 = require("./modules/sport.entity");
const team_entity_1 = require("./modules/team.entity");
const team_member_entity_1 = require("./modules/team_member.entity");
const training_entity_1 = require("./modules/training.entity");
const attendance_entity_1 = require("./modules/attendance.entity");
const event_entity_1 = require("./modules/event.entity");
const event_registration_entity_1 = require("./modules/event_registration.entity");
const payment_entity_1 = require("./modules/payment.entity");
const ledger_entry_entity_1 = require("./modules/ledger_entry.entity");
const sponsor_entity_1 = require("./modules/sponsor.entity");
const sponsorship_deal_entity_1 = require("./modules/sponsorship_deal.entity");
const document_entity_1 = require("./modules/document.entity");
const message_entity_1 = require("./modules/message.entity");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const members_module_1 = require("./members/members.module");
const sports_module_1 = require("./sports/sports.module");
const teams_module_1 = require("./teams/teams.module");
const events_module_1 = require("./events/events.module");
const event_registrations_module_1 = require("./event-registrations/event-registrations.module");
const payments_module_1 = require("./payments/payments.module");
const ledger_module_1 = require("./ledger/ledger.module");
const sponsors_module_1 = require("./sponsors/sponsors.module");
const sponsorship_deals_module_1 = require("./sponsorship-deals/sponsorship-deals.module");
const integrations_module_1 = require("./integrations/integrations.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT ?? '5432', 10),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [
                    user_entity_1.User,
                    member_entity_1.Member,
                    role_entity_1.Role,
                    member_role_entity_1.MemberRole,
                    sport_entity_1.Sport,
                    team_entity_1.Team,
                    team_member_entity_1.TeamMember,
                    training_entity_1.Training,
                    attendance_entity_1.Attendance,
                    event_entity_1.Event,
                    event_registration_entity_1.EventRegistration,
                    payment_entity_1.Payment,
                    ledger_entry_entity_1.LedgerEntry,
                    sponsor_entity_1.Sponsor,
                    sponsorship_deal_entity_1.SponsorshipDeal,
                    document_entity_1.Document,
                    message_entity_1.Message,
                ],
                synchronize: true,
                autoLoadEntities: true,
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            members_module_1.MembersModule,
            integrations_module_1.IntegrationsModule,
            auth_module_1.AuthModule,
            sports_module_1.SportsModule,
            teams_module_1.TeamsModule,
            events_module_1.EventsModule,
            event_registrations_module_1.EventRegistrationsModule,
            payments_module_1.PaymentsModule,
            ledger_module_1.LedgerModule,
            sponsors_module_1.SponsorsModule,
            sponsorship_deals_module_1.SponsorshipDealsModule,
            assets_module_1.AssetsModule,
            ui_customization_module_1.UiCustomizationModule,
            members_module_1.MembersModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map