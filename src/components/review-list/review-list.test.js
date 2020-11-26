import React from 'react';
import renderer from 'react-test-renderer';
import ReviewList from './review-list';

jest.mock(`../review-item/review-item`, () => `ReviewItem`);

const reviews = [
  {
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
  },
  {
    id: 2,
    rating: 2,
    comment: `qwertmmy`,
    date: `2020-12-05T13:38:44.753Z`,
    localUser: {
      id: 1,
      name: `Mark Goldberg`,
      isPro: true,
      avatarUrl: `url`,
    }
  },
];

describe(`<ReviewList /> render`, () => {

  it(`correctly renders Review List w/ reviews`, () => {
    const tree = renderer
      .create(
          <ReviewList
            reviews={reviews}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
