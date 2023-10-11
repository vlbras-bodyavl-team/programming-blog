import { Module } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { TopicsController } from './topics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topic } from './entities/topic.entity';
import { TopicsAdminsController } from './topics-admins.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Topic])],
  controllers: [TopicsController, TopicsAdminsController],
  providers: [TopicsService],
  exports: [TopicsService],
})
export class TopicsModule {}
