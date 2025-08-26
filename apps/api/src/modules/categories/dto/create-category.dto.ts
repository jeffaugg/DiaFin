import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: { value: string | undefined }) =>
    typeof value === 'string' ? value.toLowerCase() : value,
  )
  name: string;
}
