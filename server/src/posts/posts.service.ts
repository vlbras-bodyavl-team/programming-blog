import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm/repository/Repository';
import { TopicsService } from 'src/topics/topics.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    private readonly topicsService: TopicsService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const topic = await this.topicsService.preload(createPostDto.topic);
    const post = this.postsRepository.create({ ...createPostDto, topic });
    await this.cacheManager.del(`posts-${topic.id}`);
    
    return this.postsRepository.save(post);
  }

  async findAll(topicId: string): Promise<Post[]> {
    const cachedPosts = await this.cacheManager.get<Post[]>(`posts-${topicId}`);

    if (cachedPosts) {
      return cachedPosts;
    }

    const topic = await this.topicsService.findOne(topicId);
    const posts = await this.postsRepository.findBy({ topic });
    await this.cacheManager.set(`posts-${topicId}`, posts);

    return posts;
  }

  async findOne(id: string): Promise<Post> {
    const post = await this.postsRepository
      .createQueryBuilder('post')
      .leftJoin('post.topic', 'topic')
      .select(['post.id', 'post.title', 'post.content', 'topic.id', 'topic.name'])
      .where('post.id = :id', { id })
      .getOne();

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    const topic = await this.topicsService.preload(updatePostDto.topic);
    const post = await this.findOne(id);
    await this.cacheManager.del(`posts-${topic.id}`);

    this.postsRepository.merge(post, { ...updatePostDto, topic });
    return this.postsRepository.save(post);
  }

  async remove(id: string): Promise<Post> {
    const post = await this.findOne(id);
    await this.cacheManager.del(`posts-${post.topic.id}`);
    
    return this.postsRepository.remove(post);
  }
}
