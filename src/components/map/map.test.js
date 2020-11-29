import Map from './map';
import React from 'react';
import renderer from 'react-test-renderer';

const createNodeMock = () => document.createElement(`div`);

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
    isProUser: true,
    avatar: `mock`,
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
    isProUser: true,
    avatar: `mock`,
  },
  description: `Mock. Mock.`,
  coordinates: {
    lat: 50,
    lng: 50,
    zoom: 16,
  },
  id: 2,
}];

describe(`Map component`, () => {
  it(`Map renders correctly`, () => {
    const options = {createNodeMock};
    const tree = renderer
      .create(
          <Map
            hoveredOffer={1}
            offers={offers}
          />, options)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
