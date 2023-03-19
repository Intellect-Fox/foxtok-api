import { Injectable } from '@nestjs/common';
import { Post, posts } from './posts.data';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class PostsService {
  constructor(private authService: AuthService) {}
  getPosts(accessToken: string): Post[] {
    if (!accessToken) {
      return posts;
    }

    this.authService.validateToken(accessToken);
    return [...posts].sort(() => Math.random() - 0.5);
  }
}
