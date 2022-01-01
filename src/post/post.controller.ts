/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from '../comment/dto/createComment.dto';
import { CreatePostDto } from './dto/post.dto';
import { PostService } from './post.service';
import { Post as PostResponse } from './schemas/post.schema';
import { Comment } from '../comment/schema/comment.schema';

@ApiTags('Posts')
@Controller('/posts')
export class PostController {
  constructor(private postService: PostService) {}

  @ApiOperation({ summary: 'Создание постов' })
  @ApiCreatedResponse({
    description: 'Пост был записан на сервер',
    type: PostResponse,
  })
  @Post()
  create(@Body() dto: CreatePostDto) {
    return this.postService.create(dto);
  }

  @ApiOperation({ summary: 'Получение постов по странично' })
  @ApiResponse({ status: 200, type: [PostResponse] })
  @Get()
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.postService.getAll(count, offset);
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: PostResponse,
  })
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.postService.getOne(id);
  }

  @ApiOperation({ summary: 'Удаление поста по ID' })
  @ApiResponse({
    status: 200,
    description: 'Пост был удален',
  })
  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.postService.delete(id);
  }

  // @Delete()
  // @ApiResponse({
  //   status: 200,
  //   description: 'Посты был удален',
  // })
  // deleteAll() {
  //   return this.postService.deleteAll();
  // }
}
