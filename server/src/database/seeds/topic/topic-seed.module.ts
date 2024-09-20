import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicSeedService } from './topic-seed.service';
import { Topic } from 'src/topics/entities/topic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Topic])],
  providers: [TopicSeedService],
  exports: [TopicSeedService],
})
export class TopicSeedModule {}
