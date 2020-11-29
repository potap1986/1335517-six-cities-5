export const offer = {
  id: 0,
  hotelCity: {
    name: `Amsterdam`,
    location: {
      lat: 52.370216,
      lng: 4.895168,
      zoom: 10,
    },
  },
  previewImage: `img/1.png`,
  isPremium: false,
  isFavorite: false,
  price: 120,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`,
  rating: 4.8,
  images: [`img/1.png`, `img/2.png`],
  coordinates: {
    lat: 52.35514938496378,
    lng: 4.673877537499948,
    zoom: 8,
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  hotelHost: {
    id: 0,
    name: `Angelina`,
    isProUser: false,
    avatar: `img/1.png`,
  },
  bedrooms: 3,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  adults: 4,
};

export const city = {
  name: `Amsterdam`,
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
};

export const user = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatarUrl: `img/1.png`,
  isPro: false,
};

export const offerFromServer = {
  id: 0,
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  [`preview_image`]: `img/1.png`,
  images: [`img/1.png`, `img/2.png`],
  title: `Beautiful & luxurious studio at great location`,
  [`is_favorite`]: false,
  [`is_premium`]: false,
  rating: 4.8,
  type: `apartment`,
  bedrooms: 3,
  [`max_adults`]: 4,
  price: 120,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    id: 0,
    [`is_pro`]: false,
    name: `Angelina`,
    [`avatar_url`]: `img/1.png`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  }
};

export const userFromServer = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  [`avatar_url`]: `img/1.png`,
  [`is_pro`]: false
};

export const reviewFromServer = {
  id: 1,
  user: {
    id: 4,
    [`is_pro`]: false,
    name: `Max`,
    [`avatar_url`]: `img/1.png`
  },
  rating: 4,
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`
};

export const review = {
  id: 1,
  localUser: {
    id: 4,
    isPro: false,
    name: `Max`,
    avatarUrl: `img/1.png`,
  },
  rating: 4,
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
};
