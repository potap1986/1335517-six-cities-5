// import offers from '../../../mocks/offers';
import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {Sorting} from '../../../const';
import {CITIES} from '../../../mocks/offers';

// const initialOffers = offers.filter((offer) => offer.hotelCity.name === CITIES[0]);

const initialState = {
  hoveredOffer: -1,
  currentCity: CITIES[0],
  offersForCity: [],
  sortType: Sorting.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });
    case ActionType.RESET_SORT_TYPE:
      return extend(state, {
        sortType: Sorting.POPULAR,
      });
    case ActionType.RESET_HOVERED_OFFER:
      return extend(state, {
        hoveredOffer: -1,
      });
    case ActionType.SET_HOVERED_OFFER:
      return extend(state, {
        hoveredOffer: action.payload,
      });
    case ActionType.SET_SORT_TYPE:
      return extend(state, {
        sortType: action.payload,
      });
    case ActionType.SET_CITY_OFFERS:
      return extend(state, {
        offersForCity: action.payload,
      });
  }

  return state;
};

export default reducer;
