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

  @prop()
  public postDate!: Date;

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
  public houseType!: HouseType;

  @prop({default: 0})
  public roomsCount!: number;

  @prop({default: 0})
  public questsCount!: number;

  @prop()
  public price!: number;

  @prop({
    type: () => String,
    enum: Conveniences,
  })
  public conveniences!: Conveniences[];

  @prop({
    type: () => String,
  })
  public coords: Coords;

  @prop({default: 0})
  public commentsCount!: number;

  @prop({
    ref: UserEntity,
    required: true
  })
  public authorId!: Ref<UserEntity>;
}

export const OfferModel = getModelForClass(OfferEntity);
