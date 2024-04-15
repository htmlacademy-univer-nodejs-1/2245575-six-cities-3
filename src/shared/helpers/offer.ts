import { CitiesCoords, City, Conveniences, HouseType, Offer, UserType } from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
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
    authorFirstname,
    authorLastname,
    authorEmail,
    authorAvatar,
    commentsCount,
  ] = offerData.replace('\n', '').split('\t');

  return {
    title,
    description,
    previewImage,
    author: {
      name: authorFirstname + authorLastname,
      email: authorEmail,
      avatarPath: authorAvatar,
      type: UserType.Regular,
    },
    city: city as City,
    images: images ? images.split(';').map((url) => url.trim()) : [],
    isPremium: isPremium === 'true',
    isFavorite: isFavourite === 'true',
    rating: Number(Number(rating).toFixed(1)),
    type: houseType as HouseType,
    bedrooms: Number(roomsCount),
    maxAdults: Number(questsCount),
    price: Number(price),
    goods: conveniences
      ? (conveniences
        .split(';')
        .map((convenience) => convenience.trim()) as Conveniences[])
      : [],
    commentsCount: Number(commentsCount),
    location: CitiesCoords[city as City],
  };
}
