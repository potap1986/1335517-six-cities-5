import {CITIES} from '../../../const';
import {extend, updateOffers} from '../../../utils';
import {ActionType} from '../../action';
import {adaptOfferToClient, adaptReviewToClient} from '../../../store/adapters';

const getAdaptedOffers = (offers) => {
  return offers.map((offer) => adaptOfferToClient(offer));
};

const getAdaptedReviews = (reviews) => {
  return reviews.map((review) => adaptReviewToClient(review));
};

const initialState = {
  cities: CITIES,
  offers: null,
  nearOffers: null,
  reviews: null,
  offer: null,
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
    case ActionType.LOAD_NEAR_OFFERS:
      return extend(state, {
        nearOffers: getAdaptedOffers(action.payload),
      });
    case ActionType.LOAD_OFFER:
      return extend(state, {
        offer: adaptOfferToClient(action.payload),
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: getAdaptedReviews(action.payload),
      });
    case ActionType.UPDATE_OFFERS:
      return extend(state, {
        offers: updateOffers(state.offers, adaptOfferToClient(action.payload)),
      });
    default:
      return state;
  }
};

export default reducer;
