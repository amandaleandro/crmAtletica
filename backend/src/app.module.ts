import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetsModule } from './assets/assets.module';
import { UiCustomizationModule } from './ui-customization/ui-customization.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './modules/user.entity';
import { Member } from './modules/member.entity';
import { Role } from './modules/role.entity';
import { MemberRole } from './modules/member_role.entity';
import { Sport } from './modules/sport.entity';
import { Team } from './modules/team.entity';
import { TeamMember } from './modules/team_member.entity';
import { Training } from './modules/training.entity';
import { Attendance } from './modules/attendance.entity';
import { Event } from './modules/event.entity';
import { EventRegistration } from './modules/event_registration.entity';
import { Payment } from './modules/payment.entity';
import { LedgerEntry } from './modules/ledger_entry.entity';
import { Sponsor } from './modules/sponsor.entity';
import { SponsorshipDeal } from './modules/sponsorship_deal.entity';
import { Document } from './modules/document.entity';
import { Message } from './modules/message.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MembersModule } from './members/members.module';
import { SportsModule } from './sports/sports.module';
import { TeamsModule } from './teams/teams.module';
import { EventsModule } from './events/events.module';
import { EventRegistrationsModule } from './event-registrations/event-registrations.module';
import { PaymentsModule } from './payments/payments.module';
import { LedgerModule } from './ledger/ledger.module';
import { SponsorsModule } from './sponsors/sponsors.module';
import { SponsorshipDealsModule } from './sponsorship-deals/sponsorship-deals.module';
import { IntegrationsModule } from './integrations/integrations.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        User,
        Member,
        Role,
        MemberRole,
        Sport,
        Team,
        TeamMember,
        Training,
        Attendance,
        Event,
        EventRegistration,
        Payment,
        LedgerEntry,
        Sponsor,
        SponsorshipDeal,
        Document,
        Message,
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    UsersModule,
    MembersModule,
    IntegrationsModule,
    AuthModule,
    SportsModule,
    TeamsModule,
    EventsModule,
    EventRegistrationsModule,
    PaymentsModule,
    LedgerModule,
    SponsorsModule,
    SponsorshipDealsModule,
    AssetsModule,
    UiCustomizationModule,
    MembersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
