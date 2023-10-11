import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm/repository/Repository';
import { TopicsService } from 'src/topics/topics.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    private topicsService: TopicsService,
    private usersService: UsersService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(createPostDto: CreatePostDto, userId: string): Promise<Post> {
    const topic = await this.topicsService.preload(createPostDto.topic);
    const user = await this.usersService.findOne(userId);

    const post = this.postsRepository.create({
      ...createPostDto,
      topic,
      createdBy: user,
    });

    await this.deleteCache(topic.id);

    return this.postsRepository.save(post);
  }

  async findAll(topicId: string, type: 'view' | 'profiles'): Promise<Post[]> {
    const cachedPosts = await this.cacheManager.get<Post[]>(
      `posts-${type}-${topicId}`,
    );

    if (cachedPosts) {
      return cachedPosts;
    }

    await this.topicsService.findOne(topicId);

    const posts = await this.postsRepository.query(
      /*sql*/ `
      SELECT
        p.id,
        p.title,
        p.content
        ${
          type === 'profiles'
            ? /*sql*/ `
          , p."createdAt",
          json_build_object(
            'id', u.id,
            'email', u.email
          ) AS "createdBy",
          json_build_object(
            'id', u2.id,
            'email', u2.email
          ) AS "updatedBy"
        `
            : ''
        }
      FROM posts p
      ${
        type === 'profiles'
          ? /*sql*/ `
        LEFT JOIN users u ON u.id = p."createdBy"
        LEFT JOIN users u2 ON u2.id = p."updatedBy"
      `
          : ''
      }
      WHERE p."topicId" = $1
      ORDER BY p."createdAt" ASC;
    `,
      [topicId],
    );

    await this.cacheManager.set(`posts-${type}-${topicId}`, posts);

    return posts;
  }

  async findOne(id: string): Promise<Post> {
    const [post] = await this.postsRepository.query(
      /*sql*/ `
      SELECT
        p.id,
        p.title,
        p.content,
        json_build_object(
          'id', t.id,
          'name', t.name
        ) AS topic
      FROM posts p
      INNER JOIN topics t ON t.id = p."topicId"
      WHERE p.id = $1;
    `,
      [id],
    );

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return post;
  }

  async update(
    id: string,
    updatePostDto: UpdatePostDto,
    userId: string,
  ): Promise<Post> {
    const topic = await this.topicsService.preload(updatePostDto.topic);
    const post = await this.findOne(id);
    const user = await this.usersService.findOne(userId);

    const updatedPost = {
      ...post,
      ...updatePostDto,
      topic,
      updatedBy: user,
    };

    await this.postsRepository.save(updatedPost);
    await this.autoDeleteTopic(post.topic.id);

    return updatedPost;
  }

  async remove(id: string): Promise<void> {
    const post = await this.findOne(id);
    await this.postsRepository.remove(post);
    await this.autoDeleteTopic(post.topic.id);
  }

  private async autoDeleteTopic(topicId: string): Promise<void> {
    const postsCount = await this.postsRepository.countBy({
      topic: { id: topicId },
    });

    if (postsCount === 0) {
      await this.topicsService.remove(topicId);
    }

    await this.deleteCache(topicId);
  }

  private async deleteCache(topicId: string): Promise<void> {
    await this.cacheManager.del(`posts-view-${topicId}`);
    await this.cacheManager.del(`posts-profiles-${topicId}`);
    await this.cacheManager.del(`topics`);
  }
}
