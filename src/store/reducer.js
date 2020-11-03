import offers from '../mocks/offers';
import reviews from '../mocks/reviews';
import {extend} from "../utils";
import {ActionType} from "./action";
import {Sorting} from '../const';

const allCities = new Set([...offers.map((offer) => offer.city)]);
const cities = [...allCities];
const initialCity = cities[0] ? cities[0] : `All cities`;
const initialOffers = offers.filter((offer) => offer.city === initialCity);

const initialState = {
  hoveredOffer: null,
  currentCity: initialCity,
  offersForCity: initialOffers,
  cities,
  offers,
  reviews,
  sortType: Sorting.POPULAR,
  sortedOffers: initialOffers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return extend(state, {
        currentCity: action.payload,
      });
    case ActionType.RESET_SORT_TYPE:
      return extend(state, {
        sortType: Sorting.POPULAR,
      });
    case ActionType.RESET_HOVERED_OFFER:
      return extend(state, {
        hoveredOffer: null,
      });
    case ActionType.RESET_SORTED_OFFERS:
      return extend(state, {
        sortedOffers: state.offers.filter((offer) => offer.city === state.currentCity),
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offersForCity: state.offers.filter((offer) => offer.city === state.currentCity),
      });
    case ActionType.GET_HOVERED_OFFER:
      return extend(state, {
        hoveredOffer: action.payload,
      });
    case ActionType.SORT_OFFERS:
      return extend(state, {
        sortType: action.payload,
      });
    default: return state;
  }
};

export {reducer};
