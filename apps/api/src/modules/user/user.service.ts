import { Injectable } from '@nestjs/common';
import { CreateUserBudgetSettingDto } from './dto/create-user.dto';
import { UserRepository } from 'src/shared/database/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  setUserBudgetPreferences(
    createUserBudgetSetting: CreateUserBudgetSettingDto,
    userId: string,
  ) {
    return this.userRepo.setUserBudgetConfiguration(
      userId,
      createUserBudgetSetting,
    );
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  me(id: string) {
    return this.userRepo.me(id);
  }
}
