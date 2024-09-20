import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { UserSeedService } from './user/user-seed.service';
import { TopicSeedService } from './topic/topic-seed.service';
import { PostSeedService } from './post/post-seed.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  // run
  await app.get(UserSeedService).run();
  await app.get(TopicSeedService).run();
  await app.get(PostSeedService).run();

  await app.close();
};

void runSeed();
