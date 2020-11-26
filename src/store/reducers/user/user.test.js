import reducer from './user';
import {ActionType, ActionCreator} from '../../action';
import {AuthorizationStatus} from '../../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: {
    id: 0,
    email: ``,
    name: ``,
    avatarUrl: ``,
    isPro: false,
  },
};

describe(`Action creator works correctly`, () => {

  it(`Action creator for signing user in returns correct action`, () => {
    expect(ActionCreator.signIn(`Test user`)).toEqual({
      type: ActionType.SIGN_IN,
      payload: `Test user`,
    });
  });


  it(`Reducer should correctly change state status`, () => {
    expect(reducer(initialState, {
      type: ActionType.GET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual(Object.assign({}, initialState, {authorizationStatus: AuthorizationStatus.NO_AUTH}));
  });

  it(`Reducer should correctly change authorization status`, () => {
    expect(reducer(initialState, {
      type: ActionType.GET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTH,
    })).toEqual(Object.assign({}, initialState, {authorizationStatus: AuthorizationStatus.AUTH}));
  });

  it(`Reducer should correctly change user data`, () => {
    expect(reducer(initialState, {
      type: ActionType.SIGN_IN,
      payload: {
        id: 1,
        email: `test@mail.ru`,
        name: `test`,
        avatarUrl: `test.png`,
        isPro: true,
      },
    })).toEqual(Object.assign({}, initialState, {user: {
      id: 1,
      email: `test@mail.ru`,
      name: `test`,
      avatarUrl: `test.png`,
      isPro: true,
    }}));
  });

});
