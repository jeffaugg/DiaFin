import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { activeUserId } from 'src/shared/decorators/activeUser';
import { CreateUserBudgetSettingDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('budget-setting')
  createUserBudgetSetting(
    @Body() createUserDto: CreateUserBudgetSettingDto,
    @activeUserId() activeUserId: string,
  ) {
    return this.userService.setUserBudgetPreferences(
      createUserDto,
      activeUserId,
    );
  }

  @Get('me')
  me(@activeUserId() activeUserId: string) {
    return this.userService.me(activeUserId);
  }
}
