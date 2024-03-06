import { User } from './user.type';

export type Comment = {
  text: string;
  date: Date;
  rating: number;
  author: User['id'];
}
