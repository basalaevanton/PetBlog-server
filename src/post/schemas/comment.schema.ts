import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { Post } from './post.schema';
import { User } from 'src/user/schema/user.schema';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  text: string;

  @Prop()
  likes: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  post: Post;

  //   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  //   user: User;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
