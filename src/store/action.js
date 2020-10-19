export const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  GET_OFFERS: `GET_OFFERS`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CITY_CHANGE,
    city,
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
  })
};
