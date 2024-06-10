import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { HouseType, City, Conveniences, Coords } from '../../types/index.js';
import { UserEntity } from '../user/index.js';


export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})

export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true })
  public title!: string;

  @prop({trim: true})
  public description!: string;

  @prop({
    type: () => String,
    enum: City
  })
  public city!: City;

  @prop()
  public previewImage!: string;

  @prop()
  public images!: string[];

  @prop()
  public isPremium!: boolean;

  @prop()
  public isFavourite!: boolean;

  @prop()
  public rating!: number;

  @prop({
    type: () => String,
    enum: HouseType
  })
  public type!: HouseType;

  @prop({default: 0})
  public bedrooms!: number;

  @prop({default: 0})
  public maxAdults!: number;

  @prop()
  public price!: number;

  @prop({
    type: () => String,
    enum: Conveniences,
  })
  public goods!: Conveniences[];

  public location: Coords;

  @prop({default: 0})
  public commentsCount!: number;

  @prop({
    ref: UserEntity,
    required: true
  })
  public host!: Ref<UserEntity>;
}

export const OfferModel = getModelForClass(OfferEntity);
