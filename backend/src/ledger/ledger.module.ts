import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LedgerService } from './ledger.service';
import { LedgerController } from './ledger.controller';
import { LedgerEntry } from '../modules/ledger_entry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LedgerEntry])],
  providers: [LedgerService],
  controllers: [LedgerController],
})
export class LedgerModule {}
