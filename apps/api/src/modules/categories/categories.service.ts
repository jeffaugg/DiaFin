import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { catchError } from 'src/shared/error/catch-errors';
import { CategoryRepository } from 'src/shared/database/repositories/category.repository';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(createCategoryDto: CreateCategoryDto, userId: string) {
    const [error, category] = await catchError(
      this.categoryRepository.createCategory(createCategoryDto, userId),
    );

    if (error) {
      throw new ConflictException('Category already existss');
    }

    return category;
  }

  findAll(userId: string) {
    return this.categoryRepository.findCategoryByUserId(userId);
  }

  remove(userId: string, id: string) {
    return this.categoryRepository.removeCategory(userId, id);
  }

  findById(userId: string, id: string) {
    return this.categoryRepository.findCategoryById(userId, id);
  }
}
