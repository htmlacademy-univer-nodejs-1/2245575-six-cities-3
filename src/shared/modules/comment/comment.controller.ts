import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import {
  BaseController,
  HttpError,
  HttpMethod,
  ValidateObjectIdMiddleware,
} from '../../libs/rest/index.js';
import { Component } from '../../types/index.js';
import { Logger } from '../../libs/logger/index.js';
import { CommentService } from './comment.service.interface.js';
import { OfferService } from '../offer/index.js';
import { fillDTO } from '../../helpers/index.js';
import { CommentRdo } from './rdo/comment.rdo.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';
import { ParamOfferId } from './offer-id.type.js';
import { ValidateDtoMiddleware } from '../../libs/rest/middleware/validate-dto.middleware.js';
import { StatusCodes } from 'http-status-codes';
import { PrivateRouteMiddleware } from '../../libs/rest/middleware/private-route.middleware.js';

@injectable()
export class CommentController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.CommentService)
    private readonly commentService: CommentService,
    @inject(Component.OfferService) private readonly offerService: OfferService
  ) {
    super(logger);

    this.logger.info('Register routes for CommentController…');
    this.addRoute({
      path: '/offers/{offerId}/comments',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [
        new ValidateDtoMiddleware(CreateCommentDto),
        new ValidateObjectIdMiddleware('offerId'),
      ],
    });
    this.addRoute({
      path: '/offers/{offerId}/comments',
      method: HttpMethod.Get,
      handler: this.index,
      middlewares: [
        new PrivateRouteMiddleware(),
        new ValidateDtoMiddleware(CreateCommentDto),
        new ValidateObjectIdMiddleware('offerId'),
      ],
    });
  }

  public async index(
    { params }: Request<ParamOfferId, unknown, CreateCommentDto>,
    res: Response
  ): Promise<void> {
    const { offerId } = params;
    const comments = this.commentService.findByOfferId(offerId);
    this.ok(res, fillDTO(CommentRdo, comments));
  }

  public async create(
    {
      body,
      params,
      tokenPayload,
    }: Request<ParamOfferId, unknown, CreateCommentDto>,
    res: Response
  ): Promise<void> {
    if (!(await this.offerService.exists(body.offerId))) {
      throw new HttpError(StatusCodes.NOT_FOUND, 'Оффер не существует');
    }

    const comment = await this.commentService.create({
      ...body,
      userId: tokenPayload.id,
    });
    await this.offerService.incCommentCount(params.offerId);
    this.created(res, fillDTO(CommentRdo, comment));
  }
}
