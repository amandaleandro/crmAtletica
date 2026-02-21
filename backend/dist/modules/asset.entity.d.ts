import { User } from './user.entity';
export declare class Asset {
    id: number;
    name: string;
    description: string;
    value: number;
    acquisitionDate: Date;
    status: string;
    location: string;
    responsible: User;
}
