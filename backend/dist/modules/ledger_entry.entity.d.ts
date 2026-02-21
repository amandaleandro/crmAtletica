import { User } from './user.entity';
export declare class LedgerEntry {
    id: number;
    type: string;
    description: string;
    amount: number;
    date: string;
    createdBy: User;
    createdAt: Date;
}
