import { User } from './user.entity';
export declare class Event {
    id: number;
    name: string;
    date: string;
    location: string;
    description: string;
    createdBy: User;
    createdAt: Date;
}
