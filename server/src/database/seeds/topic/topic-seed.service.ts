import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Topic } from 'src/topics/entities/topic.entity';
import { Topics } from 'src/topics/enums/topics.enum';

import { Repository } from 'typeorm';

@Injectable()
export class TopicSeedService {
  constructor(
    @InjectRepository(Topic)
    private repository: Repository<Topic>,
  ) {}

  seedData = Object.values(Topics).map((name) => ({ name }));

  async run() {
    const count = await this.repository.count({});

    if (!count) {
      for (const topic of this.seedData) {
        await this.repository.save(this.repository.create(topic));
      }
    }
  }
}
