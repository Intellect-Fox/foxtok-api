import { Injectable } from '@nestjs/common';
import { Post, posts } from './posts.data';

@Injectable()
export class PostsService {
  getPosts(): Post[] {
    return posts;
  }
}
