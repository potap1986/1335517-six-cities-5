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

export const ActionCreator = {
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
    payload: reviews
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
  })
};
