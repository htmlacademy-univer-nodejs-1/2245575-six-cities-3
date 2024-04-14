import { City } from './city.enum.js';
import { Coords } from './coords.type.js';
import { HouseType } from './house-type.enum.js';
import { User } from './user.type.js';
import { Conveniences } from './сonveniences.enum.js';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: City;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavourite: boolean;
  rating: number;
  houseType: HouseType,
  roomsCount: number;
  questsCount: number;
  price: number;
  conveniences: Conveniences[];
  author: User;
  commentsCount: number;
  coords: Coords,
}
