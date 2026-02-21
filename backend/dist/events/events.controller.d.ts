import { EventsService } from './events.service';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    findAll(): Promise<import("../modules/event.entity").Event[]>;
    findOne(id: number): Promise<import("../modules/event.entity").Event>;
    create(body: any): Promise<import("../modules/event.entity").Event>;
    update(id: number, body: any): Promise<import("../modules/event.entity").Event>;
    remove(id: number): Promise<void>;
}
