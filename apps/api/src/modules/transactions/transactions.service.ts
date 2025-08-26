import { Injectable } from '@nestjs/common';
import { CreateFixedTransactionDto } from './dto/create-fixed-transaction.dto';
import { CreateVariablesTransactionDto } from './dto/create-variables-transaction.dto';
import { TransactionsRepository } from 'src/shared/database/repositories/transactions.repository';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  createFixed(
    createTransactionDto: CreateFixedTransactionDto,
    categoryId: string,
    userId: string,
  ) {
    return this.transactionsRepository.createFixedTransaction(
      createTransactionDto,
      categoryId,
      userId,
    );
  }

  createVariables(
    createTransactionDto: CreateVariablesTransactionDto,
    categoryId: string,
    userId: string,
  ) {
    return this.transactionsRepository.createVariablesTransaction(
      createTransactionDto,
      categoryId,
      userId,
    );
  }
}
