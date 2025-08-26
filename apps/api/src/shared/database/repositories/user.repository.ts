import { SignupAuthDto } from 'src/modules/auth/dto/signup-auth.dto';
import { DatabaseService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserBudgetSettingDto } from 'src/modules/user/dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly dbService: DatabaseService) {}

  async createUser(userData: SignupAuthDto) {
    return this.dbService.db
      .insertInto('User')
      .values({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      })
      .returningAll()
      .executeTakeFirstOrThrow();
  }

  async findByEmail(email: string) {
    return this.dbService.db
      .selectFrom('User')
      .selectAll()
      .where('User.email', '=', email)
      .executeTakeFirst();
  }

  async setUserBudgetConfiguration(
    userId: string,
    budgetData: CreateUserBudgetSettingDto,
  ) {
    const existingSetting = await this.dbService.db
      .selectFrom('BudgetSetting')
      .selectAll()
      .where('BudgetSetting.userId', '=', userId)
      .executeTakeFirst();

    if (existingSetting) {
      return this.dbService.db
        .updateTable('BudgetSetting')
        .set({
          savingPercentage: budgetData.percentage,
        })
        .where('BudgetSetting.userId', '=', userId)
        .returningAll()
        .executeTakeFirstOrThrow();
    }

    return this.dbService.db
      .insertInto('BudgetSetting')
      .values({
        savingPercentage: budgetData.percentage,
        userId: userId,
      })
      .returningAll()
      .executeTakeFirstOrThrow();
  }

  async me(id: string) {
    return this.dbService.db
      .selectFrom('User')
      .selectAll()
      .where('User.id', '=', id)
      .executeTakeFirstOrThrow();
  }
}
