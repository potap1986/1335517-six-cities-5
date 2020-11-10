import {ActionCreator} from './action';
import {AuthorizationStatus} from '../const';
import {AppRoute, APIRoute} from '../const';

const ApiActionCreator = {
  fetchOffers: () => (dispatch, _getState, api) => (
    api.get(APIRoute.HOTELS)
      .then(({data}) => dispatch(ActionCreator.getOffers(data)))
  ),
  checkAuth: () => (dispatch, _getState, api) => (
    api.get(APIRoute.LOGIN)
      .then(() => dispatch(ActionCreator.getAuthorization(AuthorizationStatus.AUTH)))
      .catch((err) => {
        throw err;
      })
  ),
  login: ({login: email, password}) => (dispatch, _getState, api) => (
    api.post(APIRoute, {email, password})
      .then(() => dispatch(ActionCreator.getAuthorization(AuthorizationStatus.AUTH)))
      .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN_PAGE)))
  )
};

export {ApiActionCreator};
