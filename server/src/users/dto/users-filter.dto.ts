import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class UserFilterDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  email?: string;
}
