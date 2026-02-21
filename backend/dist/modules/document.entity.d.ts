import { Member } from './member.entity';
export declare class Document {
    id: number;
    member: Member;
    type: string;
    url: string;
    validUntil: string;
    uploadedAt: Date;
}
