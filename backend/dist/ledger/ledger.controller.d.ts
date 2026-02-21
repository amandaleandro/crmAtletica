import { LedgerService } from './ledger.service';
export declare class LedgerController {
    private readonly ledgerService;
    constructor(ledgerService: LedgerService);
    findAll(): Promise<import("../modules/ledger_entry.entity").LedgerEntry[]>;
    findOne(id: number): Promise<import("../modules/ledger_entry.entity").LedgerEntry>;
    create(body: any): Promise<import("../modules/ledger_entry.entity").LedgerEntry>;
    update(id: number, body: any): Promise<import("../modules/ledger_entry.entity").LedgerEntry>;
    remove(id: number): Promise<void>;
}
