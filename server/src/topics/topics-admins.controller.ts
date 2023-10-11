import { Controller, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { Topic } from './entities/topic.entity';
import { RoleGuard } from 'src/core/guards/role.guard';
import { Role } from 'src/core/decorators/role.decorator';
import { Roles } from 'src/core/enums/roles.enum';
import { ApiConflictResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags('topics')
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
@ApiForbiddenResponse({ description: 'Forbidden' })
@ApiNotFoundResponse({ description: 'Topic not found' })
@UseGuards(RoleGuard)
@Role(Roles.ADMIN)
@Controller('admins/topics')
export class TopicsAdminsController {
  constructor(private readonly topicsService: TopicsService) {}

  @ApiConflictResponse({ description: 'Topic already exists' })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTopicDto: UpdateTopicDto,
  ): Promise<Topic> {
    return this.topicsService.update(id, updateTopicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.topicsService.remove(id);
  }
}
