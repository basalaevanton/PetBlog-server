import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'User', description: 'User' })
  readonly user: string;

  @ApiProperty({
    example: 'привет это первый пост',
    description: 'текст поста',
  })
  readonly text: string;
}
