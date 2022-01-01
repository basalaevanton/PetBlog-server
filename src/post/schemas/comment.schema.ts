import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { Post } from './post.schema';
import { User } from 'src/user/schema/user.schema';
import { ApiProperty } from '@nestjs/swagger';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @ApiProperty({
    description: 'Пользователь',
  })
  @Prop()
  username: string;

  @ApiProperty({
    description: 'Текст поста',
  })
  @Prop()
  text: string;

  @ApiProperty({
    description: 'Лайки комментария',
  })
  @Prop()
  likes: number;

  @ApiProperty({
    description: 'Пост',
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  post: Post;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
