export declare class CalendarService {
    createEvent({ summary, description, start, end }: {
        summary: string;
        description?: string;
        start: string;
        end: string;
    }): Promise<any>;
}
