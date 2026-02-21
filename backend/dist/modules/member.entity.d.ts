import { User } from './user.entity';
export declare class Member {
    id: string;
    user: User;
    name: string;
    course: string;
    period: string;
    phone: string;
    status: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}
