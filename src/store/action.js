export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_CITIES: `LOAD_CITIES`,
  SET_HOVERED_OFFER: `SET_HOVERED_OFFER`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  RESET_SORT_TYPE: `RESET_SORT_TYPE`,
  RESET_HOVERED_OFFER: `RESET_HOVERED_OFFER`,
  RESET_SORTED_OFFERS: `RESET_SORTED_OFFERS`,
  SET_CITY_OFFERS: `SET_CITY_OFFERS`,
  GET_AUTHORIZATION_STATUS: `GET_AUTHORIZATION_STATUS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),

  getCities: (cities) => ({
    type: ActionType.LOAD_CITIES,
    payload: cities,
  }),

  getReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),

  cityChange: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  getHoveredOffer: (offer) => ({
    type: ActionType.SET_HOVERED_OFFER,
    payload: offer,
  }),

  sortOffers: (sort) => ({
    type: ActionType.SET_SORT_TYPE,
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
