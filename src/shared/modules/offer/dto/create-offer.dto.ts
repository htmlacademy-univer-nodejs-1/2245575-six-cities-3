import { HouseType, City, Conveniences, Coords } from '../../../types/index.js';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public city: City;
  public previewImage: string;
  public images: string[];
  public isPremium: boolean;
  public type: HouseType;
  public bedrooms: number;
  public maxAdults: number;
  public price: number;
  public goods: Conveniences[];
  public location: Coords;
}
