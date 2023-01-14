import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { posts } from './posts.data';

describe('PostsController', () => {
  let appController: PostsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService],
    }).compile();

    appController = app.get<PostsController>(PostsController);
  });

  describe('posts', () => {
    it('should return posts', () => {
      expect(appController.getPosts()).toBe(posts);
    });
  });
});
