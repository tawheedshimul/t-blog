import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './database/database.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [DatabaseModule, PostsModule, EmailModule],
})
export class AppModule {}