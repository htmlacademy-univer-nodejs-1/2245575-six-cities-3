import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData } from '../../types/mock-server-data.type.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../helpers/index.js';

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const QUESTS_COUNT_MIN = 1;
const QUESTS_COUNT_MAX = 10;

const ROOMS_COUNT_MIN = 1;
const ROOMS_COUNT_MAX = 8;

const RATING_MIN = 1;
const RATING_MAX = 5;

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem(this.mockData.titles);
    const description = getRandomItem(this.mockData.descriptions);
    const authorFirstname = getRandomItem(this.mockData.authorFirstnames);
    const authorLastname = getRandomItem(this.mockData.authorLastnames);
    const authorEmail = getRandomItem(this.mockData.authorEmails);
    const authorAvatar = getRandomItem(this.mockData.authorAvatars);
    const city = getRandomItem(this.mockData.cities);
    const conveniences = getRandomItems(this.mockData.conveniences).join(';');
    const isPremium = getRandomItem(this.mockData.isPremiums);
    const isFavorite = getRandomItem(this.mockData.isFavorites);
    const previewImage = getRandomItem(this.mockData.previewImages);
    const images = getRandomItems(this.mockData.images).join(';');
    const rating = generateRandomValue(RATING_MIN, RATING_MAX);
    const roomsCount = generateRandomValue(ROOMS_COUNT_MIN, ROOMS_COUNT_MAX);
    const questsCount = generateRandomValue(QUESTS_COUNT_MIN, QUESTS_COUNT_MAX);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE);
    const houseType = getRandomItem(this.mockData.houseTypes);
    const commentsCount = generateRandomValue(0, 1000);
    return [
      title, description, city, previewImage, images, isPremium, isFavorite, rating, houseType, roomsCount, questsCount, price, conveniences, authorFirstname, authorLastname, authorEmail, authorAvatar, commentsCount
    ].join('\t');
  }
}
