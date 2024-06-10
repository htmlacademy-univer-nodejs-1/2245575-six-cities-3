import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import { BaseController, HttpMethod, ValidateObjectIdMiddleware } from '../../libs/rest/index.js';
import { Logger } from '../../libs/logger/index.js';
import { CitiesCoords, Component } from '../../types/index.js';
import { OfferService } from './offer-service.interface.js';
import { fillDTO } from '../../helpers/index.js';
import { OfferRdo } from './rdo/offer.rdo.js';
import { CreateOfferRequest } from './create-offer-request.type.js';
import { ParamOfferIdRequest } from './offer-id.type.js';
import { PrivateRouteMiddleware } from '../../libs/rest/middleware/private-route.middleware.js';

@injectable()
export class OfferController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.OfferService) private readonly offerService: OfferService,
  ) {
    super(logger);

    this.logger.info('Register routes for OfferController…');

    this.addRoute({ path: '/', method: HttpMethod.Get, handler: this.index });
    this.addRoute({ path: '/', method: HttpMethod.Post, handler: this.create });
    this.addRoute({ path: '/:offerId', method: HttpMethod.Delete, handler: this.delete, middlewares: [new PrivateRouteMiddleware(), new ValidateObjectIdMiddleware('offerId')], });
    this.addRoute({ path: '/:offerId', method: HttpMethod.Get, handler: this.getOneOffer, middlewares: [new ValidateObjectIdMiddleware('offerId')], });
    this.addRoute({ path: '/favorites', method: HttpMethod.Get, handler: this.getFavorites });
    this.addRoute({ path: '/favorites/:offerId', method: HttpMethod.Delete, handler: this.deleteFavorite, middlewares: [new PrivateRouteMiddleware(), new ValidateObjectIdMiddleware('offerId')], });
    this.addRoute({ path: '/favorites/:offerId', method: HttpMethod.Post, handler: this.setFavorite, middlewares: [new PrivateRouteMiddleware(), new ValidateObjectIdMiddleware('offerId')], });
  }

  public async index(_req: Request, res: Response): Promise<void> {
    const offers = await this.offerService.find();
    this.ok(res, fillDTO(OfferRdo, offers));
  }

  public async create({body, tokenPayload}: CreateOfferRequest, res: Response): Promise<void> {
    const result = await this.offerService.create({ ...body, location: CitiesCoords[body.city], userId: tokenPayload.id });
    this.created(res, fillDTO(OfferRdo, result));
  }

  public async delete({ params }: Request<ParamOfferIdRequest>, res: Response): Promise<void> {
    const { offerId } = params;
    const offer = await this.offerService.deleteById(offerId);
    this.noContent(res, offer);
  }

  public async getOneOffer({ params }: Request<ParamOfferIdRequest>, res: Response): Promise<void> {
    const { offerId } = params;
    const offer = await this.offerService.findById(offerId);
    this.ok(res, fillDTO(OfferRdo, offer));
  }

  public async getPremium(_req: Request, res: Response): Promise<void> {
    const offers = await this.offerService.findPremium();
    const responseData = fillDTO(OfferRdo, offers);
    this.ok(res, responseData);
  }

  public async getFavorites(_req: Request, res: Response): Promise<void> {
    const offers = await this.offerService.findFavorite();
    const responseData = fillDTO(OfferRdo, offers);
    this.ok(res, responseData);
  }

  public async setFavorite({ params }: Request<ParamOfferIdRequest>, res: Response): Promise<void> {
    const { offerId } = params;
    const result = await this.offerService.addFavoriteById(offerId);
    const responseData = fillDTO(OfferRdo, result);
    this.ok(res, responseData);
  }

  public async deleteFavorite({ params }: Request<ParamOfferIdRequest>, res: Response): Promise<void> {
    const { offerId } = params;
    const result = await this.offerService.removeFromFavoriteById(offerId);
    const responseData = fillDTO(OfferRdo, result);
    this.ok(res, responseData);
  }
}
