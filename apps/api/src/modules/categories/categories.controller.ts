import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { activeUserId } from 'src/shared/decorators/activeUser';
import { IsPaginated } from 'src/shared/decorators/isPaginated';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(
    @Body() createCategoryDto: CreateCategoryDto,
    @activeUserId() userId: string,
  ) {
    return this.categoriesService.create(createCategoryDto, userId);
  }

  @IsPaginated()
  @Get()
  findAll(@activeUserId() userId: string) {
    return this.categoriesService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @activeUserId() userId: string) {
    return this.categoriesService.findById(userId, id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @activeUserId() userId: string) {
    return this.categoriesService.remove(userId, id);
  }
}
