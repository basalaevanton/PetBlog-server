/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/createComment.dto';
import { Comment } from './schema/comment.schema';

@ApiTags('Comments')
@Controller('/comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @ApiOperation({ summary: 'Добавить комментарий для поста' })
  @ApiCreatedResponse({
    description: 'Комментарий был записан на сервер',
    type: Comment,
  })
  @Post()
  addComment(@Body() dto: CreateCommentDto) {
    return this.commentService.addComment(dto);
  }

  @ApiOperation({ summary: 'Удалить комментарий для поста' })
  @ApiCreatedResponse({
    description: 'Комментарий был удален',
  })
  @Delete('/comment/:id')
  deleteComment(@Param('id') id: ObjectId) {
    return this.commentService.deleteComment(id);
  }
}
