import { Member } from './member.entity';
export declare class Message {
    id: number;
    member: Member;
    type: string;
    content: string;
    sentAt: Date;
}
