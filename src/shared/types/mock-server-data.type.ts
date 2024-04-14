import { HouseType } from './house-type.enum.js';
import { Conveniences } from './сonveniences.enum.js';

export type MockServerData = {
  postDates: string[];
  titles: string[];
  isPremiums: boolean[];
  isFavorites: boolean[];
  descriptions: string[];
  cities: string[];
  previewImages: string[];
  images: string[];
  ratings: number[];
  houseTypes: HouseType[];
  conveniences: Conveniences[];
  authorFirstnames: string[];
  authorLastnames: string[];
  authorEmails: string[];
  authorAvatars: string[];
  commentsCounts: number[];
};
