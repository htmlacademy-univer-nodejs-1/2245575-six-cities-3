import { HouseType, City, Conveniences } from '../../../types/index.js';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public postDate: Date;
  public city: City;
  public previewImage: string;
  public images: string[];
  public isPremium: boolean;
  public isFavourite: boolean;
  public rating: number;
  public houseType: HouseType;
  public roomsCount: number;
  public questsCount: number;
  public price: number;
  public conveniences: Conveniences[];
  public authorId: string;
}
