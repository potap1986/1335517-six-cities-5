const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomBool = (chance = 0.5) => Math.random() < chance;

const offersQantity = 4;
const OFFER_TYPE = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};

const OFFER_FEATURES = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];

const ratingMIN = 1;
const ratingMAX = 5;
const roomsMIN = 1;
const roomsMAX = 3;
const guestsMIN = 0;
const guestsMAX = 4;

const getTitle = function (index) {
  return `Заголовок предложения ` + (index + 1);
};

const getPhotos = function () {
  const arr = [];
  for (let i = 0; i < getRandomNumber(1, 5); i++) {
    arr.push(`img/apartment-0` + getRandomNumber(1, 3) + `.jpg`);
  }
  return arr;
};

const getNewOfferFeatures = function () {
  const arr = [];
  for (let i = 0; i < getRandomNumber(0, OFFER_FEATURES.length); i++) {
    if (getRandomNumber(0, 1)) {
      arr.push(OFFER_FEATURES[i]);
    }
  }
  return arr;
};

const getDescription = function (index) {
  return `Описание ` + (index + 1);
};

const getMaster = function (index) {
  return `Хозяин ` + (index + 1);
};

const createOffers = function (count) {
  const array = [];
  let locationX = getRandomNumber(50, 700);
  let locationY = getRandomNumber(130, 630);
  for (let i = 0; i < count; i++) {
    const object = {
      id: i + 1,
      image: getPhotos(),
      title: getTitle(i),
      description: [getDescription(i), getDescription(i), getDescription(i)],
      isPremium: getRandomBool(),
      price: getRandomNumber(10, 1000),
      type: Object.values(OFFER_TYPE)[getRandomNumber(0, 3)],
      rate: getRandomNumber(ratingMIN, ratingMAX),
      bedrooms: getRandomNumber(roomsMIN, roomsMAX),
      adults: getRandomNumber(guestsMIN, guestsMAX),
      avatar: `img/avatar-angelina.jpg`,
      host: getMaster(i),
      facilities: getNewOfferFeatures(),
      isBookmarked: getRandomBool(),
      isProUser: getRandomBool(),
      x: locationX,
      y: locationY,
    };
    array.push(object);
  }
  return array;
};

export const offers = createOffers(offersQantity);
