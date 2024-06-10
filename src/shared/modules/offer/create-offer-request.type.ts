import { Request } from 'express';
import { RequestBody } from '../../libs/rest/types/request-body.type.js';
import { CreateOfferDto } from './index.js';
import { RequestParams } from '../../libs/rest/types/request-params.type.js';

export type CreateOfferRequest = Request<RequestParams, RequestBody, CreateOfferDto>;
