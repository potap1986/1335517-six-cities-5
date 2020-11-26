import React from 'react';
import renderer from 'react-test-renderer';
import ReviewSection from './review-section';

const offer = {
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
};

const reviews = [{
  id: 1,
  rating: 1,
  comment: `qwerty`,
  date: `2020-11-05T13:38:44.753Z`,
  localUser: {
    id: 1,
    name: `Mark Goldberg`,
    isPro: true,
    avatarUrl: `url`,
  }
}];

const noop = () => {};

describe(`<ReviewSection /> render`, () => {

  it(`correctly renders Review Section w/o reviews if authorized`, () => {
    const tree = renderer
      .create(
          <ReviewSection
            reviews={[]}
            authorizationStatus={`AUTH`}
            offer={offer}
            onSubmit={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Review Section w/o reviews if not authorized`, () => {
    const tree = renderer
      .create(
          <ReviewSection
            reviews={[]}
            authorizationStatus={`NO_AUTH`}
            offer={offer}
            onSubmit={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Review Section w/ reviews if authorized`, () => {
    const tree = renderer
      .create(
          <ReviewSection
            reviews={reviews}
            authorizationStatus={`AUTH`}
            offer={offer}
            onSubmit={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`correctly renders Review Section w/ reviews if not authorized`, () => {
    const tree = renderer
      .create(
          <ReviewSection
            reviews={reviews}
            authorizationStatus={`NO_AUTH`}
            offer={offer}
            onSubmit={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
