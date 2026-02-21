// src/integrations/calendar.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { CalendarService } from './calendar.service';

@Controller('api/integrations/calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Post('create')
  async create(@Body() body: { summary: string; description?: string; start: string; end: string }) {
    return this.calendarService.createEvent(body);
  }
}
