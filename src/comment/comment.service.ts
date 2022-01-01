/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Post, PostDocument } from 'src/post/schemas/post.schema';
import { CreateCommentDto } from './dto/createComment.dto';
import { Comment, CommentDocument } from './schema/comment.schema';

@Injectable()
export class CommentService {
  constructor(
    // @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const post = await this.postModel.findById(dto.postId);
    const comment = await this.commentModel.create({ ...dto, likes: 0 });
    post.comments.push(comment._id);
    await post.save();

    return comment;
  }

  async deleteComment(id: ObjectId): Promise<ObjectId> {
    const commentDelete = await this.commentModel.findOneAndDelete(id);

    return commentDelete._id;
  }
}
