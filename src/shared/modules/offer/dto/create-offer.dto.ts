import { OfferValidationMessage } from './offer.messages.js';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsUrl,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { HouseType, City, Conveniences, Coords } from '../../../types/index.js';

export class CreateOfferDto {
  @MinLength(5, { message: OfferValidationMessage.title.minLength })
  @MaxLength(100, { message: OfferValidationMessage.title.maxLength })
  public title: string;

  @MinLength(5, {
    message: OfferValidationMessage.description.minLength,
  })
  @MaxLength(1024, {
    message: OfferValidationMessage.description.maxLength,
  })
  public description: string;

  @IsEnum(City, { message: OfferValidationMessage.city.invalid })
  public city: City;

  @IsUrl({}, { message: OfferValidationMessage.previewImage.invalid })
  public previewImage: string;

  @IsUrl({},
    {
      each: true,
      message: OfferValidationMessage.images.someImageInvalid,
    }
  )
  public images: string[];

  @IsBoolean({ message: OfferValidationMessage.isPremium.invalid })
  public isPremium: boolean;

  @IsEnum(HouseType, { message: OfferValidationMessage.type.invalid })
  public type: HouseType;

  @Min(1, { message: OfferValidationMessage.bedrooms.invalidDecimal })
  @IsNumber(
    { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 1 },
    { message: OfferValidationMessage.bedrooms.invalid }
  )
  @Max(8, {
    message: OfferValidationMessage.bedrooms.invalidDecimal,
  })
  public bedrooms: number;

  @IsNumber(
    { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 1 },
    { message: OfferValidationMessage.maxAdults.invalid }
  )
  @Min(1, { message: OfferValidationMessage.maxAdults.invalidDecimal })
  @Max(10, {
    message: OfferValidationMessage.maxAdults.invalidDecimal,
  })
  public maxAdults: number;

  @IsNumber(
    { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 1 },
    { message: OfferValidationMessage.price.invalid }
  )
  @Min(100, { message: OfferValidationMessage.price.invalidDecimal })
  @Max(100000, { message: OfferValidationMessage.price.invalidDecimal })
  public price: number;

  @IsEnum(Conveniences, {
    each: true,
    message: OfferValidationMessage.goods.invalid,
  })
  public goods: Conveniences[];

  public location: Coords;
}
