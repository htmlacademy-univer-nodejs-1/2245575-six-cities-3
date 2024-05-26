import { CreateOfferDto } from './dto/create-offer.dto.js';
import { DocumentType } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import { UpdateOfferDto } from './dto/update-offer.dto.js';

export interface OfferService {
  updateById(id: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null>;
  findPremium(): Promise<DocumentType<OfferEntity>[] | null>;
  findFavorite(): Promise<DocumentType<OfferEntity>[] | null>;
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
