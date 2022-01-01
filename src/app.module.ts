import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [],
  providers: [],
  imports: [
    UserModule,
    PostModule,
    MongooseModule.forRoot(
      'mongodb+srv://root:root@cluster0.c8wf3.mongodb.net/PetBlog?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
