import React from 'react';
import {CityChange} from './city-change';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const offers = [{
  hotelCity: {
    name: `Mock`,
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
    name: `Kcom`,
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

const mock = [`Mock`, `Kcom`];

describe(`<CityChange /> e2e testing`, () => {
  it(`Click on City tab calls callback`, () => {
    const onCityChange = jest.fn();
    const wrapper = mount(<CityChange
      currentCity={`Kcom`}
      cities={mock}
      onCityChange={onCityChange}
      allOffers={offers}
    />);

    const container = wrapper.find(`.tabs__item:not(.tabs__item--active)`);

    container.simulate(`click`);
    expect(onCityChange).toHaveBeenCalledWith(mock[1], offers);
    expect(onCityChange).toHaveBeenCalledTimes(2);
  });

});
