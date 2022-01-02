import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export class CreateCommentDto {
  @ApiProperty({ example: 'User', description: 'User' })
  readonly username: string;

  @ApiProperty({ example: 'Классный пост', description: 'Текст комментария' })
  readonly text: string;

  @ApiProperty({ example: '61d1d2d26a5d1024af15b71e', description: 'PostId' })
  readonly postId: ObjectId;
}
