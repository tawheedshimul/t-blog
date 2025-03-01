import { Schema, Document } from 'mongoose';

export const PostSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  postNo: { type: Number, required: true },
});

export class Post extends Document {
  title: string;
  body: string;
  postNo: number;
}