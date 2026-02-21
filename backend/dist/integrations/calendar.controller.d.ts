import { CalendarService } from './calendar.service';
export declare class CalendarController {
    private readonly calendarService;
    constructor(calendarService: CalendarService);
    create(body: {
        summary: string;
        description?: string;
        start: string;
        end: string;
    }): Promise<any>;
}
