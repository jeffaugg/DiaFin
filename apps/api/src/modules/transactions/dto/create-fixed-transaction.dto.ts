import { IsEnum, IsNumber, IsString } from 'class-validator';
import { TxType } from 'src/db/types';

export class CreateFixedTransactionDto {
  @IsEnum(TxType, { message: 'Invalid transaction type' })
  type: TxType;

  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'Amount must be a valid number' },
  )
  amount: number;
  @IsString({ message: 'Description must be a valid string' })
  description?: string;
}
