import { CitiesCoords, City, Conveniences, HouseType, Offer } from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [
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
      firstname: authorFirstname,
      lastname: authorLastname,
      email: authorEmail,
      avatarPath: authorAvatar
    },
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
    coords: CitiesCoords[city as City],
  };
}
