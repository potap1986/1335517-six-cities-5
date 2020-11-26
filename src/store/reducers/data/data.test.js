import {CITIES} from '../../../const';
import {ActionType, ActionCreator} from '../../action';
import reducer from './data';
import {offer, review, offerFromServer, reviewFromServer} from '../../../mock';

const initialState = {
  cities: CITIES,
  offers: null,
  nearOffers: null,
  reviews: null,
  offer: null,
};

describe(`Action creator works correctly`, () => {
  it(`Action creator for loading offers returns correct action`, () => {
    expect(ActionCreator.loadOffers([offer, offer])).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: [offer, offer],
    });
  });

  it(`Action creator for loading near offers returns correct action`, () => {
    expect(ActionCreator.loadNearOffers([offer, offer])).toEqual({
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: [offer, offer],
    });
  });

  it(`Action creator for loading cities returns correct action`, () => {
    expect(ActionCreator.loadCities([])).toEqual({
      type: ActionType.LOAD_CITIES,
      payload: [],
    });
  });

  it(`Action creator for loading reviews returns correct action`, () => {
    expect(ActionCreator.loadReviews([review, review])).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: [review, review],
    });
  });

});

describe(`Reducers works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should correctly set offers`, () => {
    expect(reducer(initialState, {
      type: ActionType.LOAD_OFFERS,
      payload: [offerFromServer, offerFromServer],
    })).toEqual(Object.assign({}, initialState, {offers: [offer, offer]}));
  });

  it(`Reducer should correctly set reviews`, () => {
    expect(reducer(initialState, {
      type: ActionType.LOAD_REVIEWS,
      payload: [reviewFromServer, reviewFromServer],
    })).toEqual(Object.assign({}, initialState, {reviews: [review, review]}));
  });

});
