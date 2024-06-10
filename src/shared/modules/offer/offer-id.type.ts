import { ParamsDictionary } from 'express-serve-static-core';

export type ParamOfferIdRequest = {
  offerId: string;
} | ParamsDictionary
