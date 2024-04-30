import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { BadRequestException } from '@nestjs/common';
import { IsNumber, IsPositive } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsNumber()
  @IsPositive()
  id: number;

  static emptyObject = (updateProductDto: UpdateProductDto) => {
    if (
      !updateProductDto ||
      Object.values(updateProductDto).every(
        (value) => value === null || value === undefined,
      )
    ) {
      throw new BadRequestException('You must make at least one update');
    }
  };
}
