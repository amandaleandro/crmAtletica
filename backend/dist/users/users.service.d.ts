import { Repository } from 'typeorm';
import { User } from '../modules/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findByEmail(email: string): Promise<User | undefined>;
    create(userData: Partial<User>): Promise<User>;
}
