import { UserType } from './user-type.enum.js';

export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  userType: UserType;
  avatarUrl?: string;
}
