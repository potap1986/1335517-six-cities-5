import OfferCard from './offer-card';
import renderer from 'react-test-renderer';

jest.mock(`../bookmark/bookmark`, () => `Bookmark`);

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

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`OfferCard correctly renders after relaunch`, () => {
  const card = renderer
    .create(<OfferCard
      offer={offer}
      onOfferHover={jest.fn()}
      onOfferClick={jest.fn()}
      onBookmarkClick={jest.fn()}
      className={`main`}
    />)
  .toJSON();

  expect(card).toMatchSnapshot();
});
