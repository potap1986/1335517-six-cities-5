import {ActionCreator} from './action';
import {AuthorizationStatus, HttpCode} from '../const';
import {APIRoute} from '../const';
import {adaptUserToClient} from '../store/adapters';

const ApiActionCreator = {
  fetchOffers: () => (dispatch, _getState, api) => (
    api.get(APIRoute.HOTELS)
      .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
  ),
  fetchOffer: (offerId) => (dispatch, _getState, api) => (
    api.get(`${APIRoute.HOTEL}${offerId}`)
      .then(({data}) => dispatch(ActionCreator.loadOffer(data)))
  ),
  fetchNearOffers: (offerId) => (dispatch, _getState, api) => (
    api.get(`${APIRoute.HOTEL}${offerId}/nearby`)
      .then(({data}) => dispatch(ActionCreator.loadNearOffers(data)))
  ),
  checkAuth: () => (dispatch, _getState, api) => (
    api.get(APIRoute.LOGIN)
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreator.getAuthorization(AuthorizationStatus.AUTH));
          dispatch(ActionCreator.signIn(adaptUserToClient(response.data)));
        }
      })
  ),

  login: (user) => (dispatch, _getState, api) => (
    api.post(APIRoute.LOGIN, user)
      .then((response) => {
        dispatch(ActionCreator.getAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.signIn(adaptUserToClient(response.data)));
      })),
  loadReviews: (id) => (dispatch, _getState, api) => (
    api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
  ),
  changeOfferStatus: (id, status, successCallback) => (dispatch, _getState, api) => {
    const numberStatus = status ? 1 : 0;
    api.post(`${APIRoute.FAVORITE}/${id}/${numberStatus}`)
    .then(() => {
      if (successCallback) {
        successCallback();
      }
    });
  },
  getFavoriteOffers: () => (dispatch, _getState, api) => {
    api.get(APIRoute.FAVORITE)
    .then((response) => dispatch(ActionCreator.updateOffers(response.data)));
  },

  postReview: (id, review, successCallback, failureCallback) => (dispatch, _getState, api) => {
    api.post(`${APIRoute.REVIEWS}/${id}`, review)
    .then((response) => {
      if (response.status === HttpCode.SUCCESS) {
        dispatch(ActionCreator.loadReviews(response.data));
        successCallback();
      } else {
        failureCallback();
      }
    }).catch((e) => failureCallback(e));
  }
};

export {ApiActionCreator};
