
import OfferCard from './offer-card';
import {shallow} from 'enzyme';

jest.mock(`../bookmark/bookmark`, () => `Bookmark`);

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

it(`Correct info in callbacks in Card component`, () => {

  const onOfferHover = jest.fn();
  const onOfferClick = jest.fn();
  const onBookmarkClick = jest.fn();

  const card = shallow(
      <OfferCard
        offer={offers[0]}
        onOfferHover={onOfferHover}
        onOfferClick={onOfferClick}
        onBookmarkClick={onBookmarkClick}
        className={`main`}
      />
  );

  const cardNode = card.find(`article`);
  const link = card.find(`.place-card__name Link`);
  cardNode.simulate(`mouseover`);
  link.simulate(`click`);
  expect(onOfferHover).toHaveBeenCalled();
  expect(onOfferClick).toHaveBeenCalled();
});
