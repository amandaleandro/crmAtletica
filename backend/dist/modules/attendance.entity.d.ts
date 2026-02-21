import { Training } from './training.entity';
import { Member } from './member.entity';
export declare class Attendance {
    id: number;
    training: Training;
    member: Member;
    present: boolean;
    checkedInAt: Date;
}
