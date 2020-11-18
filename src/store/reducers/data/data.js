import reviews from '../../../mocks/reviews';
import {CITIES} from '../../../mocks/offers';
import {extend} from '../../../utils';
import {ActionType} from '../../action';
import {adaptToClient} from '../../../store/adapters';

const getAdaptedOffers = (offers) => {
  return offers.map((offer) => adaptToClient(offer));
};

const initialState = {
  cities: CITIES,
  offers: [],
  offer: null,
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_CITIES:
      return extend(state, {
        cities: action.payload,
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: getAdaptedOffers(action.payload),
      });
    case ActionType.LOAD_OFFER:
      return extend(state, {
        offer: adaptToClient(action.payload),
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    default:
      return state;
  }
};

export default reducer;
