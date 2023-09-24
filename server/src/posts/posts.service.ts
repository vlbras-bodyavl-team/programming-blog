import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm/repository/Repository';
import { TopicsService } from 'src/topics/topics.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    private readonly topicsService: TopicsService,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const topic = await this.topicsService.preload(createPostDto.topic);
    const post = this.postsRepository.create({ ...createPostDto, topic });
    return this.postsRepository.save(post);
  }

  async findAll(topicId: string): Promise<Post[]> {
    const topic = await this.topicsService.findOne(topicId);
    return this.postsRepository.findBy({ topic });
  }

  async findOne(id: string): Promise<Post> {
    const post = await this.postsRepository
      .createQueryBuilder('post')
      .leftJoin('post.topic', 'topic')
      .select(['post.id', 'post.title', 'post.content', 'topic.name'])
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
    this.postsRepository.merge(post, { ...updatePostDto, topic });
    return this.postsRepository.save(post);
  }

  async remove(id: string): Promise<Post> {
    const post = await this.findOne(id);
    return this.postsRepository.remove(post);
  }
}
