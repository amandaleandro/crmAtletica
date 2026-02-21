import { EventRegistrationsService } from './event-registrations.service';
export declare class EventRegistrationsController {
    private readonly registrationsService;
    constructor(registrationsService: EventRegistrationsService);
    findAll(): Promise<import("../modules/event_registration.entity").EventRegistration[]>;
    findOne(id: number): Promise<import("../modules/event_registration.entity").EventRegistration>;
    create(body: any): Promise<import("../modules/event_registration.entity").EventRegistration>;
    update(id: number, body: any): Promise<import("../modules/event_registration.entity").EventRegistration>;
    remove(id: number): Promise<void>;
}
