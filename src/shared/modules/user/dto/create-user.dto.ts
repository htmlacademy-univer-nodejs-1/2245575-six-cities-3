import { UserType } from '../../../types/user-type.enum.js';
import { UserValidationMessages } from './user.messages.js';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {

  @IsEmail({}, { message: UserValidationMessages.email.url })
  public email: string;

  @IsOptional()
  @IsUrl({}, { message: UserValidationMessages.avatarUrl.url })
  public avatarUrl: string;

  @MinLength(1, { message: UserValidationMessages.name.min })
  @MaxLength(15, { message: UserValidationMessages.name.max })
  public name: string;

  @IsEnum(UserType, { message: UserValidationMessages.type.type })
  public type: UserType;

  @MinLength(6, { message: UserValidationMessages.password.min })
  @MaxLength(12, { message: UserValidationMessages.password.max })
  public password: string;
}
