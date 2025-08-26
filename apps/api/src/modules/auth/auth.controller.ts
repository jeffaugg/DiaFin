import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninAuthDto } from './dto/signin-auth.dto';
import { SignupAuthDto } from './dto/signup-auth.dto';
import { isPublic } from 'src/shared/decorators/isPublic';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @isPublic()
  @Post('signin')
  authenticate(@Body() createAuthDto: SigninAuthDto) {
    return this.authService.authenticate(createAuthDto);
  }

  @isPublic()
  @Post('signup')
  register(@Body() createAuthDto: SignupAuthDto) {
    return this.authService.create(createAuthDto);
  }
}
