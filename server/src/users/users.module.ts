import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersAdminsController } from './users-admins.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersAdminsController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
