import {ActionType, ActionCreator} from './action';

const CITIES = [`Amsterdam`, `Paris`, `Cologne`, `Brussels`, `Hamburg`, `Dusseldorf`];

const reviews = [{
  id: 1,
  rating: 1,
  comment: `qwerty`,
  date: `October 2077`,
  localUser: {
    id: 1,
    name: `Mark Goldberg`,
    isPro: true,
    avatarUrl: `url`,
  }
}];

const user = {
  id: 1,
  name: `Mark Goldberg`,
  isPro: true,
  avatarUrl: `url`,
};

const offers = [{
  hotelCity: {
    name: `Lafayette`,
    location: {
      lat: 30,
      lng: 19,
      zoom: 16,
    },
  },
  previewImage: `mock`,
  images: [`mock`, `mock`],
  title: `mock`,
  isFavorite: true,
  isPremium: true,
  rating: 5,
  type: `hotel`,
  bedrooms: 2,
  adults: 2,
  price: 22,
  goods: [`mock`, `mock`],
  hotelHost: {
    id: 2,
    name: `John Doe`,
    isPro: true,
    avatarUrl: `mock`,
  },
  description: `Mock. Mock.`,
  coordinates: {
    lat: 50,
    lng: 50,
    zoom: 16,
  },
  id: 1,
},
{
  hotelCity: {
    name: `Lafayette`,
    location: {
      lat: 30,
      lng: 19,
      zoom: 16,
    },
  },
  previewImage: `mock`,
  images: [`mock`, `mock`],
  title: `mock`,
  isFavorite: true,
  isPremium: true,
  rating: 5,
  type: `hotel`,
  bedrooms: 2,
  adults: 2,
  price: 22,
  goods: [`mock`, `mock`],
  hotelHost: {
    id: 2,
    name: `John Doe`,
    isPro: true,
    avatarUrl: `mock`,
  },
  description: `Mock. Mock.`,
  coordinates: {
    lat: 50,
    lng: 50,
    zoom: 16,
  },
  id: 2,
}];

describe(`Action creators work correctly`, () => {

  it(`Action creator for load offers returns correct action`, () => {
    expect(ActionCreator.loadOffers(offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    });
  });

  it(`Action creator for load nearby hotels returns correct action`, () => {
    expect(ActionCreator.loadNearOffers(offers)).toEqual({
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: offers,
    });
  });

  it(`Action creator for load offer returns correct action`, () => {
    expect(ActionCreator.loadOffer(offers[0])).toEqual({
      type: ActionType.LOAD_OFFER,
      payload: offers[0],
    });
  });

  it(`Action creator for load cities returns correct action`, () => {
    expect(ActionCreator.loadCities(CITIES)).toEqual({
      type: ActionType.LOAD_CITIES,
      payload: CITIES,
    });
  });

  it(`Action creator for load reviews returns correct action`, () => {
    expect(ActionCreator.loadReviews(reviews)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    });
  });

  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Lafayette`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Lafayette`,
    });
  });

  it(`Action creator for srt hovered offer returns correct action`, () => {
    expect(ActionCreator.setHoveredOffer(offers[0])).toEqual({
      type: ActionType.SET_HOVERED_OFFER,
      payload: offers[0],
    });
  });

  it(`Action creator for set sort type returns correct action`, () => {
    expect(ActionCreator.setSortType(`Popular`)).toEqual({
      type: ActionType.SET_SORT_TYPE,
      payload: `Popular`,
    });
  });

  it(`Action creator for reset sort type returns correct action`, () => {
    expect(ActionCreator.resetSortType()).toEqual({
      type: ActionType.RESET_SORT_TYPE
    });
  });

  it(`Action creator for set city offers returns correct action`, () => {
    expect(ActionCreator.setCityOffers(offers)).toEqual({
      type: ActionType.SET_CITY_OFFERS,
      payload: offers,
    });
  });

  it(`Action creator for get authorization returns correct action`, () => {
    expect(ActionCreator.getAuthorization(`AUTH`)).toEqual({
      type: ActionType.GET_AUTHORIZATION_STATUS,
      payload: `AUTH`
    });
  });

  it(`Action creator for redirect to route returns correct action`, () => {
    expect(ActionCreator.redirectToRoute(`/away`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/away`,
    });
  });

  it(`Action creator for sign in returns correct action`, () => {
    expect(ActionCreator.signIn(user)).toEqual({
      type: ActionType.SIGN_IN,
      payload: user
    });
  });

});
