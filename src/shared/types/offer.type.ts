import { City } from './city.enum.js';
import { Coords } from './coords.type.js';
import { HouseType } from './house-type.enum.js';
import { User } from './user.type.js';
import { Conveniences } from './сonveniences.enum.js';

export type Offer = {
  title: string;
  description: string;
  city: City;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: HouseType,
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: Conveniences[];
  author: User;
  commentsCount: number;
  location: Coords,
}
