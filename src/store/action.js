export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
  LOAD_OFFER: `LOAD_OFFER`,
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
  SIGN_IN: `SIGN_IN`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
};

export const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),

  loadNearOffers: (nearOffers) => ({
    type: ActionType.LOAD_NEAR_OFFERS,
    payload: nearOffers,
  }),

  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),

  loadCities: (cities) => ({
    type: ActionType.LOAD_CITIES,
    payload: cities,
  }),

  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),

  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  setHoveredOffer: (offer) => ({
    type: ActionType.SET_HOVERED_OFFER,
    payload: offer,
  }),

  setSortType: (sort) => ({
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

  signIn: (user) => ({
    type: ActionType.SIGN_IN,
    payload: user,
  }),

  updateOffers: (offer) => ({
    type: ActionType.UPDATE_OFFERS,
    payload: offer,
  })
};
