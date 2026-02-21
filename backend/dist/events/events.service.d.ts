import { Repository } from 'typeorm';
import { Event } from '../modules/event.entity';
export declare class EventsService {
    private eventsRepository;
    constructor(eventsRepository: Repository<Event>);
    findAll(): Promise<Event[]>;
    findOne(id: number): Promise<Event>;
    create(data: Partial<Event>): Promise<Event>;
    update(id: number, data: Partial<Event>): Promise<Event>;
    remove(id: number): Promise<void>;
}
