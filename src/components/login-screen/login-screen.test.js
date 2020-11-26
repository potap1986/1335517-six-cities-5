import {LoginScreen} from './login-screen';
import renderer from 'react-test-renderer';

jest.mock(`../header/header`, () => `Header`);

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`Sign in form correctly renders after relaunch`, () => {

  const signIn = renderer
    .create(<LoginScreen
      onSubmit={jest.fn()}
    />)
  .toJSON();

  expect(signIn).toMatchSnapshot();
});
