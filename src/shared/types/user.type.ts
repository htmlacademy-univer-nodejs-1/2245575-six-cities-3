import { UserType } from './user-type.enum';

export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  userType: UserType;
  avatarUrl?: string;
}
