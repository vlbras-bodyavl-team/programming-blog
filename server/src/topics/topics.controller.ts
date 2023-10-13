import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { Topic } from './entities/topic.entity';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags('topics')
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Get()
  @CacheKey('topics')
  @UseInterceptors(CacheInterceptor)
  findAll(): Promise<Topic[]> {
    return this.topicsService.findAll();
  }
}
