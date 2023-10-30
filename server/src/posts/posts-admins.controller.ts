import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post as PostEntity } from './entities/post.entity';
import { RoleGuard } from 'src/core/guards/role.guard';
import { Roles } from 'src/core/decorators/role.decorator';
import { Role } from 'src/core/enums/role.enum';
import {
  ApiForbiddenResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserId } from 'src/core/decorators/user-id.decorator';

@ApiTags('posts')
@ApiUnauthorizedResponse({ description: 'Unauthorized' })
@ApiForbiddenResponse({ description: 'Forbidden' })
@UseGuards(RoleGuard)
@Roles(Role.ADMIN)
@Controller('admins')
export class PostsAdminsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('posts')
  async create(
    @Body() createPostDto: CreatePostDto,
    @UserId() userId: string,
  ): Promise<PostEntity> {
    return this.postsService.create(createPostDto, userId);
  }

  @Roles(Role.ADMIN, Role.MODERATOR)
  @Get('topics/:id/posts')
  findAll(@Param('id') topicId: string): Promise<PostEntity[]> {
    return this.postsService.findAll(topicId, 'profiles');
  }

  @Get('posts/:id')
  findOne(@Param('id') id: string): Promise<PostEntity> {
    return this.postsService.findOne(id);
  }

  @Put('posts/:id')
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @UserId() userId: string,
  ): Promise<PostEntity> {
    console.log('id', id);
    return this.postsService.update(id, updatePostDto, userId);
  }

  @Delete('posts/:id')
  remove(@Param('id') id: string): Promise<void> {
    return this.postsService.remove(id);
  }
}
