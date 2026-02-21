import { Repository } from 'typeorm';
import { LedgerEntry } from '../modules/ledger_entry.entity';
export declare class LedgerService {
    private ledgerRepository;
    constructor(ledgerRepository: Repository<LedgerEntry>);
    findAll(): Promise<LedgerEntry[]>;
    findOne(id: number): Promise<LedgerEntry>;
    create(data: Partial<LedgerEntry>): Promise<LedgerEntry>;
    update(id: number, data: Partial<LedgerEntry>): Promise<LedgerEntry>;
    remove(id: number): Promise<void>;
}
