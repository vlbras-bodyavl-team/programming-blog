import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { Post as PostEntity } from "./entities/post.entity";
import { RoleGuard } from "src/core/guards/role.guard";
import { Role } from "src/core/decorators/role.decorator";
import { Roles } from "src/core/enums/roles.enum";

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(RoleGuard)
  @Role(Roles.ADMIN)
  @Post("posts")
  async create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postsService.create(createPostDto);
  }

  @Get("topics/:id/posts")
  findAll(@Param("id") topicId: string): Promise<PostEntity[]> {
    return this.postsService.findAll(topicId);
  }

  @UseGuards(RoleGuard)
  @Role(Roles.ADMIN)
  @Get("posts/:id")
  findOne(@Param("id") id: string): Promise<PostEntity> {
    return this.postsService.findOne(id);
  }

  @UseGuards(RoleGuard)
  @Role(Roles.ADMIN)
  @Put("posts/:id")
  update(
    @Param("id") id: string,
    @Body() updatePostDto: UpdatePostDto
  ): Promise<PostEntity> {
    return this.postsService.update(id, updatePostDto);
  }

  @UseGuards(RoleGuard)
  @Role(Roles.ADMIN)
  @Delete('posts/:id')
  remove(@Param('id') id: string): Promise<void> {
    return this.postsService.remove(id);
  }
}
