import React from 'react';
import {Provider} from 'react-redux';
import renderer from "react-test-renderer";
import App from './app';
import configureStore from 'redux-mock-store';
import {CITIES, Sorting, AuthorizationStatus} from '../../const';

jest.mock(`../private-route/private-route`, () => `PrivateRoute`);
jest.mock(`../main-page/main-page`, () => `MainPage`);
jest.mock(`../login-screen/login-screen`, () => `LoginScreen`);
jest.mock(`../favorites-screen/favorites-screen`, () => `FavoritesScreen`);
jest.mock(`../offer-screen/offer-screen`, () => `OfferScreen`);

const storeConfig = configureStore();

const store = storeConfig({
  DATA: {
    cities: CITIES,
    offers: null,
    nearOffers: null,
    reviews: null,
    offer: null,
  },
  APPLICATION: {
    hoveredOffer: -1,
    currentCity: CITIES[0],
    offersForCity: [],
    sortType: Sorting.POPULAR,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: {
      id: 0,
      email: ``,
      name: ``,
      avatar: ``,
      isPro: false,
    }
  },
});

describe(`Render App`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
