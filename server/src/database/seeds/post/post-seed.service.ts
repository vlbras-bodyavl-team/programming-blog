import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/posts/entities/post.entity';

import { Repository } from 'typeorm';
import { postSeedData } from './post-seed.data';
import { Topic } from 'src/topics/entities/topic.entity';

@Injectable()
export class PostSeedService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
    @InjectRepository(Topic) private topicsRepository: Repository<Topic>,
  ) {}

  async run() {
    const count = await this.postsRepository.count({});

    const topics = await this.topicsRepository.find({
      select: { id: true, name: true },
    });

    if (!count) {
      for (const post of postSeedData) {
        const topic = topics.find((topic) => topic.name === post.topic.name);
        await this.postsRepository.save(
          this.postsRepository.create({
            ...post,
            topic,
          }),
        );
      }
    }
  }
}
