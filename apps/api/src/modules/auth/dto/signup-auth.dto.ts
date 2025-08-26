import { IsEmail, IsString, IsNotEmpty, Matches } from 'class-validator';

export class SignupAuthDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must have at least 8 chars, 1 uppercase, 1 lowercase and 1 number',
  })
  password: string;
}
