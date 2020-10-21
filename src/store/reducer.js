import offers from '../mocks/offers';
import reviews from '../mocks/reviews';
import {extend} from "../utils";
import {ActionType} from "./action";
import {getOffers} from '../location';

const allCities = new Set([...offers.map((offer) => offer.city)]);
const cities = [...allCities];
const initialCity = cities[0];
const initialOffers = offers.filter((offer) => offer.city === initialCity);

const initialState = {
  currentCity: initialCity,
  offersForCity: initialOffers,
  cities,
  offers,
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return extend(state, {
        currentCity: action.city
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offersForCity: getOffers(state.offers, state.currentCity),
      });
  }

  return state;
};


export {reducer};