import { Repository } from 'typeorm';
import { EventRegistration } from '../modules/event_registration.entity';
export declare class EventRegistrationsService {
    private registrationsRepository;
    constructor(registrationsRepository: Repository<EventRegistration>);
    findAll(): Promise<EventRegistration[]>;
    findOne(id: number): Promise<EventRegistration>;
    create(data: Partial<EventRegistration>): Promise<EventRegistration>;
    update(id: number, data: Partial<EventRegistration>): Promise<EventRegistration>;
    remove(id: number): Promise<void>;
}
