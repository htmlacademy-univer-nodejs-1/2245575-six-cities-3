import { IsMongoId, Max, MaxLength, Min, MinLength } from 'class-validator';
import { CommentValidationMessage } from './comment.messages.js';
export class CreateCommentDto {

  @IsMongoId({message: CommentValidationMessage.offerId.invalid })
  public offerId: string;

  @MinLength(5, {message: CommentValidationMessage.comment.min})
  @MaxLength(1024, {message: CommentValidationMessage.comment.max})
  public comment: string;

  @Min(1, { message: CommentValidationMessage.rating.invalidDecimal })
  @Max(5, { message: CommentValidationMessage.rating.invalidDecimal })
  public rating: number;

  @IsMongoId({message: CommentValidationMessage.userId.invalid })
  public userId: string;
}
