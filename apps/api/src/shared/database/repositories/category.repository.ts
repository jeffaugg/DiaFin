import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../prisma.service';
import { CreateCategoryDto } from 'src/modules/categories/dto/create-category.dto';

@Injectable()
export class CategoryRepository {
  constructor(private readonly dbService: DatabaseService) {}

  async createCategory(categoryData: CreateCategoryDto, userId: string) {
    return this.dbService.db
      .insertInto('Category')
      .values({
        name: categoryData.name,
        userId: userId,
      })
      .executeTakeFirstOrThrow();
  }

  async findCategoryById(categoryId: string, userId: string) {
    return this.dbService.db
      .selectFrom('Category')
      .selectAll()
      .where('id', '=', categoryId)
      .where('userId', '=', userId)
      .executeTakeFirstOrThrow();
  }

  async findCategoryByUserId(userId: string) {
    return this.dbService.db
      .selectFrom('Category')
      .selectAll()
      .select(({ fn }) => fn.countAll().over().as('total'))
      .where('userId', '=', userId)
      .execute();
  }

  async removeCategory(categoryId: string, userId: string) {
    return this.dbService.db
      .deleteFrom('Category')
      .where('id', '=', categoryId)
      .where('userId', '=', userId)
      .executeTakeFirstOrThrow();
  }
}
