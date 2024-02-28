import { readFileSync } from 'node:fs';
import { City } from '../../types/city.enum.js';
import { HouseType } from '../../types/house-type.enum.js';
import { Offer } from '../../types/offer.type.js';
import { Conveniences } from '../../types/сonveniences.enum.js';
import { FileReader } from './file-reader.interface.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(private readonly filename: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(
        ([
          title,
          description,
          postDate,
          city,
          previewImage,
          images,
          isPremium,
          isFavourite,
          rating,
          houseType,
          roomsCount,
          questsCount,
          price,
          conveniences,
          author,
          commentsCount,
          latitude,
          longitude,
        ]) => ({
          title,
          description,
          author,
          previewImage,
          postDate: new Date(postDate),
          city: city as City,
          images: images ? images.split(';').map((url) => url.trim()) : [],
          isPremium: isPremium === 'true',
          isFavourite: isFavourite === 'true',
          rating: Number(Number(rating).toFixed(1)),
          houseType: houseType as HouseType,
          roomsCount: Number(roomsCount),
          questsCount: Number(questsCount),
          price: Number(price),
          conveniences: conveniences
            ? (conveniences
              .split(';')
              .map((convenience) => convenience.trim()) as Conveniences[])
            : [],
          commentsCount: Number(commentsCount),
          coords: {
            latitude: Number(latitude),
            longitude: Number(longitude),
          },
        })
      );
  }
}
