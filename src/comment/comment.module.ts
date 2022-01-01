import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Post, PostSchema } from 'src/post/schemas/post.schema';
import { Comment, CommentSchema } from './schema/comment.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
