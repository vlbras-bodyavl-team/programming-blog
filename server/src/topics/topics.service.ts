import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Topic } from './entities/topic.entity';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class TopicsService {
  constructor(
    @InjectRepository(Topic)
    private topicsRepository: Repository<Topic>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  findAll(): Promise<Topic[]> {
    return this.topicsRepository
      .createQueryBuilder('topic')
      .leftJoinAndSelect('topic.posts', 'post')
      .select(['topic.id', 'topic.name', 'post.id', 'post.title'])
      .getMany();
  }

  async findOne(id: string): Promise<Topic> {
    const topic = await this.topicsRepository.findOneBy({ id });
    if (!topic) {
      throw new NotFoundException('Topic not found');
    }
    return topic;
  }

  async update(id: string, updateTopicDto: UpdateTopicDto): Promise<Topic> {
    const topic = await this.findOne(id);
    try {
      const updatedTopic = this.topicsRepository.merge(topic, updateTopicDto);
      await this.topicsRepository.save(topic);
      await this.cacheManager.del('topics');
      
      return updatedTopic;
    } 
    catch (error) {
      throw new ConflictException('Topic already exists');
    }
  }

  async remove(id: string): Promise<Topic> {
    const topic = await this.findOne(id);
    await this.cacheManager.del('topics');

    return await this.topicsRepository.remove(topic);
  }

  async preload(name: string): Promise<Topic> {
    const existingTopic = await this.topicsRepository.findOneBy({ name });
    await this.cacheManager.del('topics');

    if (existingTopic) {
      return existingTopic;
    }

    const newTopic = this.topicsRepository.create({ name });
    return this.topicsRepository.save(newTopic);
  }
}
