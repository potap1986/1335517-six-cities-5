import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {AuthorizationStatus} from '../../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: {
    id: 0,
    email: ``,
    name: ``,
    avatar: ``,
    isPro: false,
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SIGN_IN:
      return extend(state, {
        user: action.payload,
      });
  }

  return state;
};

export default reducer;
