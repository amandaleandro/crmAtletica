import { Module } from '@nestjs/common';
import { EventRegistrationsService } from './event-registrations.service';
import { EventRegistrationsController } from './event-registrations.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { EventRegistration } from '../modules/event_registration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventRegistration])],
  controllers: [EventRegistrationsController],
  providers: [EventRegistrationsService],
})
export class EventRegistrationsModule {}
