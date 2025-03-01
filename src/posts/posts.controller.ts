import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostModel } from './schemas/post.schema';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() post: PostModel): Promise<PostModel> {
    return this.postsService.create(post);
  }

  @Get()
  async findAll(): Promise<PostModel[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostModel> {
    const post = await this.postsService.findOne(id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() post: Partial<PostModel>): Promise<PostModel> {
    const updatedPost = await this.postsService.update(id, post);
    if (!updatedPost) {
      throw new NotFoundException('Post not found');
    }
    return updatedPost;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    const result = await this.postsService.delete(id);
    if (!result) {
      throw new NotFoundException('Post not found');
    }
    return { message: 'Post deleted successfully' };
  }
}