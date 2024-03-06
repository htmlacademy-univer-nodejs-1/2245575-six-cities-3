import { City } from './city.enum';
import { Coords } from './coords.type';
import { HouseType } from './house-type.enum';
import { User } from './user.type';
import { Conveniences } from './сonveniences.enum';

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
  author: User['id'];
  commentsCount: number;
  coords: Coords,
}
