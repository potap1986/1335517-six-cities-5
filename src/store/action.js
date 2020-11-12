export const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  GET_OFFERS: `GET_OFFERS`,
  GET_REVIEWS: `GET_REVIEWS`,
  GET_CITIES: `GET_CITIES`,
  GET_HOVERED_OFFER: `GET_HOVERED_OFFER`,
  SORT_OFFERS: `SORT_OFFERS`,
  RESET_SORT_TYPE: `RESET_SORT_TYPE`,
  RESET_HOVERED_OFFER: `RESET_HOVERED_OFFER`,
  RESET_SORTED_OFFERS: `RESET_SORTED_OFFERS`,
  SET_CITY_OFFERS: `SET_CITY_OFFERS`,
  GET_AUTHORIZATION_STATUS: `GET_AUTHORIZATION_STATUS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

/*
*   У тебя в одном файле экшен креэйторы относящиеся для всех редьюсеров, намного удобнее было бы хранить их либо в файле с
*   редьюсером, либо в каждой папке с редьюсером можно содать файл actionCreators. Идея в том чтобы рядом с редьюсером лежали экшен
*   креэйторы относящиеся только к этому редьюсеру.
*  */

export const ActionCreator = {
  // Плохое название для экшен креатора через "get", через get, обычно, называют функции которые возвращают что-то,
  // здесь логичнее было бы loadOffers, loadCities и т.д
  getOffers: (offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers,
  }),

  getCities: (cities) => ({
    type: ActionType.GET_CITIES,
    payload: cities,
  }),

  getReviews: (reviews) => ({
    type: ActionType.GET_REVIEWS,
    payload: reviews,
  }),

  cityChange: (city) => ({
    type: ActionType.CITY_CHANGE,
    payload: city,
  }),

  getHoveredOffer: (offer) => ({
    type: ActionType.GET_HOVERED_OFFER,
    payload: offer,
  }),

  sortOffers: (sort) => ({
    type: ActionType.SORT_OFFERS,
    payload: sort,
  }),

  resetSortType: () => ({
    type: ActionType.RESET_SORT_TYPE,
  }),

  resetHoveredOffer: () => ({
    type: ActionType.RESET_HOVERED_OFFER,
  }),

  resetSortedOffers: () => ({
    type: ActionType.RESET_SORTED_OFFERS,
  }),

  setCityOffers: (offers) => ({
    type: ActionType.SET_CITY_OFFERS,
    payload: offers,
  }),

  getAuthorization: (status) => ({
    type: ActionType.GET_AUTHORIZATION_STATUS,
    payload: status,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
