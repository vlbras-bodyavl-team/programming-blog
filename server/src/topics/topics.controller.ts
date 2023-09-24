import { Controller, Get, Body, Param, Delete, Put, UseInterceptors } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { Topic } from './entities/topic.entity';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Get()
  @CacheKey('topics')
  @UseInterceptors(CacheInterceptor)
  findAll(): Promise<Topic[]> {
    return this.topicsService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTopicDto: UpdateTopicDto,
  ): Promise<Topic> {
    return this.topicsService.update(id, updateTopicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Topic> {
    return this.topicsService.remove(id);
  }
}
