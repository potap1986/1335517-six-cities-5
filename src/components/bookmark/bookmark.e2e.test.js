import React from 'react';
import {Bookmark} from './bookmark';
import {shallow} from 'enzyme';

it(`Correct info in callbacks in Bookmark component`, () => {

  const onClick = jest.fn();

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

  const card = shallow(
      <Bookmark
        className={`main`}
        onClick={onClick}
        id={offers[0].id}
        isFavorite={true}
        authorizationStatus={`AUTH`}
      />
  );

  const bookmark = card.find(`button`);
  bookmark.simulate(`click`);

  expect(onClick).toHaveBeenCalledWith(1, false);
});
