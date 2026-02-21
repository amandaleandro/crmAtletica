import { Event } from './event.entity';
import { Member } from './member.entity';
export declare class EventRegistration {
    id: number;
    event: Event;
    member: Member;
    status: string;
    checkIn: boolean;
    checkInAt: Date;
}
