import renderer from 'react-test-renderer';
import {MainPage} from './main-page';

jest.mock(`../offer-list/offer-list`, () => `OfferList`);
jest.mock(`../map/map`, () => `Map`);
jest.mock(`../header/header`, () => `Header`);
jest.mock(`../city-change/city-change`, () => `CityChange`);
jest.mock(`../empty-main-page/empty-main-page`, () => `EmptyMainPage`);
jest.mock(`../sort/sort`, () => `Sort`);

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

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

it(`Main screen correctly renders after relaunch`, () => {
  const mainScreen = renderer
    .create(<MainPage
      offers={offers}
      hoveredOffer={0}
      city={`Berlin`}
      onOfferClick={jest.fn()}
      onCityChange={jest.fn()}
      onSortTypeClick={jest.fn()}
      onOfferHover={jest.fn()}
    />)
  .toJSON();

  expect(mainScreen).toMatchSnapshot();
});
