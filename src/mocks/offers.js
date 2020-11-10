const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomBool = (chance = 0.5) => Math.random() < chance;

const offersQantity = 8;
const OFFER_TYPE = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};

export const CITIES = [`Amsterdam`, `Paris`, `Cologne`, `Brussels`, `Hamburg`, `Dusseldorf`];

const OFFER_FEATURES = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];

const LOCATIONS = [
  {
    lat: `52.3909553943508`,
    lng: `4.85309666406198`
  },
  {
    lat: `52.369553943508`,
    lng: `4.85309666406198`
  },
  {
    lat: `52.3909553943508`,
    lng: `4.929309666406198`
  },
  {
    lat: `52.3809553943508`,
    lng: `4.939309666406198`
  }];

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
    arr.push(`imgapartment-0` + getRandomNumber(1, 3) + `.jpg`);
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
  const image = getPhotos();
  for (let i = 0; i < count; i++) {
    const object = {
      id: i + 1,
      images: image,
      previewImage: image[0],
      title: getTitle(i),
      description: [getDescription(i), getDescription(i), getDescription(i)],
      isPremium: getRandomBool(),
      price: getRandomNumber(10, 1000),
      type: Object.values(OFFER_TYPE)[getRandomNumber(0, 3)],
      rating: getRandomNumber(ratingMIN, ratingMAX),
      bedrooms: getRandomNumber(roomsMIN, roomsMAX),
      adults: getRandomNumber(guestsMIN, guestsMAX),
      hotelHost: {
        avatar: `imgavatar-angelina.jpg`,
        name: getMaster(i),
        isProUser: getRandomBool(),
      },
      goods: getNewOfferFeatures(),
      isFavorite: getRandomBool(),
      coordinates: i < 4 ? LOCATIONS[i] : LOCATIONS[i - 4],
      hotelCity: {
        name: CITIES[getRandomNumber(0, 5)],
      }
    };
    array.push(object);
  }
  return array;
};

export default createOffers(offersQantity);
