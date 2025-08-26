import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from 'src/shared/database/repositories/user.repository';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { JwtPayload } from 'src/shared/types';
import { SigninAuthDto } from './dto/signin-auth.dto';
import { SignupAuthDto } from './dto/signup-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private jwtService: JwtService,
  ) {}

  async authenticate(loginRequestDto: SigninAuthDto) {
    const { email, password } = loginRequestDto;

    const user = await this.validateUser(email, password);

    const token = await this.generateToken({ userId: user.id });

    return { token };
  }

  async create(createAuthDto: SignupAuthDto) {
    const { email, name, password } = createAuthDto;

    const emailAlreadyExists = await this.userRepo.findByEmail(email);

    if (emailAlreadyExists) throw new ConflictException('Email already exists');

    const hashPassword = await hash(password, 10);

    const user = await this.userRepo.createUser({
      name,
      email,
      password: hashPassword,
    });

    const token = await this.generateToken({ userId: user.id });
    return { token };
  }

  private async validateUser(email: string, password: string) {
    const user = await this.userRepo.findByEmail(email);

    if (!user) throw new NotFoundException('User not found');

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) throw new NotFoundException('Invalid credentials');

    return user;
  }

  private async generateToken(data: JwtPayload) {
    return this.jwtService.signAsync(data);
  }
}
