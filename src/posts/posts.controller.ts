import { Controller, Get, Headers } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './posts.data';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(@Headers() headers): Post[] {
    return this.postsService.getPosts(headers.authorization);
  }
}
