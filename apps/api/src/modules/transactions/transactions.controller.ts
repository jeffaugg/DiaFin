import { Controller, Post, Body, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateFixedTransactionDto } from './dto/create-fixed-transaction.dto';
import { CreateVariablesTransactionDto } from './dto/create-variables-transaction.dto';
import { activeUserId } from 'src/shared/decorators/activeUser';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('fixed/:categoryId')
  createFixedTransaction(
    @Body() createTransactionDto: CreateFixedTransactionDto,
    @Param('categoryId') categoryId: string,
    @activeUserId() userId: string,
  ) {
    return this.transactionsService.createFixed(
      createTransactionDto,
      categoryId,
      userId,
    );
  }

  @Post('variables/:categoryId')
  createVariablesTransaction(
    @Body() createTransactionDto: CreateVariablesTransactionDto,
    @Param('categoryId') categoryId: string,
    @activeUserId() userId: string,
  ) {
    return this.transactionsService.createVariables(
      createTransactionDto,
      categoryId,
      userId,
    );
  }
}
