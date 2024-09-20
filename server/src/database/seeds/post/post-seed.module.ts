import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostSeedService } from './post-seed.service';
import { Post } from 'src/posts/entities/post.entity';
import { Topic } from 'src/topics/entities/topic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Topic])],
  providers: [PostSeedService],
  exports: [PostSeedService],
})
export class PostSeedModule {}
