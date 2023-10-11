import {
  Controller,
  Get,
  Param,
} from "@nestjs/common";
import { PostsService } from "./posts.service";
import { Post as PostEntity } from "./entities/post.entity";
import { ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";

@ApiTags("posts")
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get("topics/:id/posts")
  findAll(@Param("id") topicId: string): Promise<PostEntity[]> {
    return this.postsService.findAll(topicId, 'view');
  }
}
