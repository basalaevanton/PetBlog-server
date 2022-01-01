/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User, UserDocument } from 'src/user/schema/user.schema';
import { CreatePostDto } from './dto/post.dto';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { Post, PostDocument } from './schemas/post.schema';

@Injectable()
export class PostService {
  constructor(
    // @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async create(dto: CreatePostDto): Promise<Post> {
    const post = await this.postModel.create({
      ...dto,
      likes: 0,
      date: new Date(),
    });

    return post;
  }

  async getAll(count = 10, offset = 0): Promise<Post[]> {
    const posts = await this.postModel
      .find()
      .skip(Number(offset))
      .limit(Number(count));

    return posts;
  }

  async getOne(id: ObjectId) {
    const post = await (await this.postModel.findById(id)).populate('comments');
    return post;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const comments = (await this.postModel.findById(id)).comments;

    const commentsDelete = await this.commentModel.deleteMany({ comments });

    const postDelete = await this.postModel.findOneAndDelete(id);

    return postDelete._id;
  }

  // async deleteAll() {
  //   const comments = await this.postModel.find().comment;

  //   const commentsDelete = await this.commentModel.deleteMany({ comments });

  //   const postDelete = await this.postModel.deleteMany();

  //   return postDelete;
  // }
}
