import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsEnum, IsOptional, IsString, Length } from 'class-validator';
import { Role } from 'src/core/enums/role.enum';

export class CreateUserDto {  
  @ApiProperty({ description: 'The email of the user', example: 'example@example.com' })
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  email: string;

  @ApiProperty({ description: 'The password of the user', example: 'password' })
  @IsString()
  @Length(8, 20)
  password: string;

  @ApiProperty({ description: 'The role of the user', example: 'customer' })
  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
