import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {AuthorizationStatus} from '../../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // здесь сделай так же как я описал в applications.js
    case ActionType.GET_AUTHORIZATION_STATUS:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};

export default reducer;
