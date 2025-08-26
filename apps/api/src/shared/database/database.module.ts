import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './prisma.service';
import { UserRepository } from './repositories/user.repository';
import { CategoryRepository } from './repositories/category.repository';
import { TransactionsRepository } from './repositories/transactions.repository';

@Global()
@Module({
  controllers: [],
  providers: [
    DatabaseService,
    UserRepository,
    CategoryRepository,
    TransactionsRepository,
  ],
  exports: [
    DatabaseService,
    UserRepository,
    CategoryRepository,
    TransactionsRepository,
  ],
})
export class DatabaseModule {}
