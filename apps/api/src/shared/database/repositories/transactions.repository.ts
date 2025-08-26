import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../prisma.service';
import { CreateFixedTransactionDto } from 'src/modules/transactions/dto/create-fixed-transaction.dto';
import { CreateVariablesTransactionDto } from 'src/modules/transactions/dto/create-variables-transaction.dto';

@Injectable()
export class TransactionsRepository {
  constructor(private readonly dbService: DatabaseService) {}

  async createFixedTransaction(
    createTransactionDto: CreateFixedTransactionDto,
    categoryId: string,
    userId: string,
  ) {
    return this.dbService.db
      .insertInto('FixedTransaction')
      .values({
        amount: createTransactionDto.amount,
        type: createTransactionDto.type,
        categoryId,
        userId,
      })
      .executeTakeFirstOrThrow();
  }

  async createVariablesTransaction(
    createTransactionDto: CreateVariablesTransactionDto,
    categoryId: string,
    userId: string,
  ) {
    return this.dbService.db
      .insertInto('Transaction')
      .values({
        amount: createTransactionDto.amount,
        type: createTransactionDto.type,
        categoryId,
        userId,
        occurredAt: createTransactionDto.occurredAt,
      })
      .executeTakeFirstOrThrow();
  }
}
