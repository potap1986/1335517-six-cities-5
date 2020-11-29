import {mount} from 'enzyme';
import withNewReview from './with-new-review';
import NewReview from '../components/new-review/new-review';

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
  id: 0,
};

it(`Review form should correctly change state on input and submit `, () => {
  const textChangeEvt = {
    target: {
      name: `review`,
      value: `Test review more then 50 characters an less then 300 characters`,
    },
  };

  const MockReviewFormWrapped = withNewReview(NewReview);
  const formSubmitHandler = jest.fn();

  const reviewForm = mount(<MockReviewFormWrapped
    offer={offer}
    onSubmit={formSubmitHandler}
    onInputChange={jest.fn()}
    formRef={{current: document.createElement(`form`)}}
    textRef={{current: document.createElement(`textarea`)}}
    markRef={{current: document.createElement(`input`)}}
    buttonRef={{current: document.createElement(`button`)}}
    isValid={true}
    isError={false}
  />);

  const form = reviewForm.find(`.reviews__form`);

  form.simulate(`change`, textChangeEvt);
  expect(reviewForm.state()).toEqual({
    review: ``,
    rating: 0,
    isValid: false,
    isError: false,
  });

});
