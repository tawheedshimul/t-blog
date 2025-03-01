import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://t-blog:t-blog@cluster0.qjxy6.mongodb.net/t-blog?retryWrites=true&w=majority&appName=Cluster0'),
  ],
})
export class DatabaseModule {}