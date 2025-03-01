import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './database/database.module';
import { EmailModule } from './email/email.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [DatabaseModule, PostsModule, EmailModule, ProfileModule],
})
export class AppModule {}