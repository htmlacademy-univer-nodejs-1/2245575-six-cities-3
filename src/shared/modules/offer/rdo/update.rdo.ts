import { Expose } from 'class-transformer';
import { Coords } from '../../../types/coords.type.js';
import { City } from '../../../types/city.enum.js';
import { Conveniences } from '../../../types/сonveniences.enum.js';
import { HouseType } from '../../../types/house-type.enum.js';

export class UpdateOfferRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public city: City;

  @Expose()
  public previewImage: string;

  @Expose()
  public images: string[];

  @Expose()
  public isPremium: boolean;

  @Expose()
  public type: HouseType;

  @Expose()
  public bedrooms: number;

  @Expose()
  public maxAdults: number;

  @Expose()
  public price: number;

  @Expose()
  public goods: Conveniences[];

  @Expose()
  public location: Coords;
}
