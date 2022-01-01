import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

import { User } from 'src/user/schema/user.schema';
import { Comment } from 'src/comment/schema/comment.schema';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  //   @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  //   User: User;

  @ApiProperty({
    description: 'ID of User',
  })
  _id: mongoose.ObjectId;

  @ApiProperty({
    description: 'name of User',
  })
  @Prop()
  user: string;

  @ApiProperty({
    description: 'title your post',
  })
  @Prop()
  title: string;

  @ApiProperty({
    description: 'text of your post',
  })
  @Prop()
  text: string;

  @ApiProperty({
    description: 'Date of post',
  })
  @Prop()
  date: Date;

  @ApiProperty({
    description: 'Likes of post',
  })
  @Prop()
  likes: number;

  //   @Prop()
  //   picture: string;

  @ApiProperty({
    description: 'Comments of post',
  })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
