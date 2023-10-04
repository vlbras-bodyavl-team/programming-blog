import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "./entities/post.entity";
import { Repository } from "typeorm/repository/Repository";
import { TopicsService } from "src/topics/topics.service";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    private topicsService: TopicsService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const topic = await this.topicsService.preload(createPostDto.topic);
    const post = this.postsRepository.create({ ...createPostDto, topic });

    await this.deleteCache(topic.id);

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
      throw new NotFoundException("Post not found");
    }

    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    const topic = await this.topicsService.preload(updatePostDto.topic);
    const post = await this.findOne(id);

    await this.deleteCache(topic.id);

    const updatedPost = {
      ...post,
      ...updatePostDto,
      topic,
    }

    await this.postsRepository.save(updatedPost);
    await this.autoDeleteTopic(post.topic.id);

    return updatedPost;
  }

  async remove(id: string): Promise<void>{
    const post = await this.findOne(id);

    await this.deleteCache(post.topic.id);

    await this.postsRepository.remove(post);
    await this.autoDeleteTopic(post.topic.id);
  }

  private async autoDeleteTopic(topicId: string): Promise<void> {
    const postsCount = await this.postsRepository.countBy({ topic: { id: topicId } });
  
    if (postsCount === 0) {
      await this.topicsService.remove(topicId);
    }
  }

  private async deleteCache(topicId: string): Promise<void> {
    await this.cacheManager.del(`posts-${topicId}`);
    await this.cacheManager.del(`topics`);
  }
}
