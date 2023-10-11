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

  async findAll(): Promise<Topic[]> {
    const cachedTopics = await this.cacheManager.get<Topic[]>('topics');

    if (cachedTopics) {
      return cachedTopics;
    }

    const topics = await this.topicsRepository.query(/*sql*/ `
      SELECT
        t.id,
        t.name,
        CASE
          WHEN COUNT(p.id) = 0 THEN '[]'::json
          ELSE json_agg(
            json_build_object(
              'id', p.id,
              'title', p.title
            ) ORDER BY p."createdAt" ASC
          )
        END AS posts
      FROM topics t
      LEFT JOIN posts p ON p."topicId" = t.id
      GROUP BY t.id, t.name
      ORDER BY t."createdAt" ASC;
    `);

    await this.cacheManager.set('topics', topics);

    return topics;
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

  async remove(id: string): Promise<void> {
    const topic = await this.findOne(id);
    await this.topicsRepository.remove(topic);
    await this.cacheManager.del('topics');
  }

  async preload(name: string): Promise<Topic> {
    const existingTopic = await this.topicsRepository.findOneBy({ name });
    if (existingTopic) {
      return existingTopic;
    }
    const newTopic = this.topicsRepository.create({ name });
    return this.topicsRepository.save(newTopic);
  }
}
