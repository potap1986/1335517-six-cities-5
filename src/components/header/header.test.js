import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header';

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

const user = {
  id: 1,
  name: `Mark Goldberg`,
  email: `Oliver.conner@gmail.com`,
  isPro: true,
  avatarUrl: `url`,
};

describe(`Header component`, () => {
  it(`Authorized header snapshot`, () => {
    const tree = renderer
      .create(
          <Header
            authorizationStatus={`AUTH`}
            user={user}
          />
      )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
