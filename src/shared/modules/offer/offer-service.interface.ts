import { CreateOfferDto } from './dto/create-offer.dto.js';
import { DocumentType } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import { Offer } from '../../types/offer.type.js';

export interface OfferService {
  updateById(id: string, dto: Offer): Promise<DocumentType<OfferEntity> | null>;
  findByPremiumAndCity(city: string): Promise<DocumentType<OfferEntity>[] | null>;
  findByFavorite(): Promise<DocumentType<OfferEntity>[] | null>;
  addFavoriteById(id: string): Promise<DocumentType<OfferEntity> | null>;
  incCommentCount(id: string): Promise<DocumentType<OfferEntity> | null>;
  removeFromFavoriteById(id: string): Promise<DocumentType<OfferEntity> | null>;
  exists(documentId: string): Promise<boolean>;
  deleteById(id: string): Promise<DocumentType<OfferEntity> | null>;
  calculateRating(id: string, newRating: number, newCommentsCount: number): Promise<DocumentType<OfferEntity> | null>;
  create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
  findById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  find(count?: number): Promise<DocumentType<OfferEntity>[] | null>;
}
