import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { TopicsModule } from 'src/topics/topics.module';
import { PostsAdminsController } from './posts-admins.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), TopicsModule, UsersModule],
  controllers: [PostsController, PostsAdminsController],
  providers: [PostsService],
})
export class PostsModule {}
