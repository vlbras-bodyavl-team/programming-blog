import { Transform } from 'class-transformer';
import { IsEmail, IsEnum, IsOptional, IsString, Length } from 'class-validator';
import { Roles } from 'src/core/enums/roles.enum';

export class CreateUserDto {  
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  email: string;

  @IsString()
  @Length(8, 20)
  password: string;

  @IsOptional()
  @IsEnum(Roles)
  role?: Roles;
}
