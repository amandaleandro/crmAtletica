import { Member } from './member.entity';
import { Event } from './event.entity';
export declare class Payment {
    id: number;
    member: Member;
    event: Event;
    amount: number;
    dueDate: string;
    paid: boolean;
    paidAt: Date;
    proofUrl: string;
}
