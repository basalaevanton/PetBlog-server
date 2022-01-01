import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export class CreateCommentDto {
  @ApiProperty({ example: 'User', description: 'User' })
  readonly username: string;

  @ApiProperty({ example: 'Классный пост', description: 'Текст комментария' })
  readonly text: string;

  @ApiProperty({ example: '61d09f2542767f82ad571b60', description: 'PostId' })
  readonly postId: ObjectId;
}
