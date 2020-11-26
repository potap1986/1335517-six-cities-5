import {ActionType, ActionCreator} from "../../action";
import reducer from './application';
import {Sorting, CITIES} from '../../../const';

const initialState = {
  hoveredOffer: -1,
  currentCity: CITIES[0],
  offersForCity: [],
  sortType: Sorting.POPULAR,
};

describe(`Action creator works correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`,
    });
  });

  it(`Action creator for changing sorting order returns correct action`, () => {
    expect(ActionCreator.setSortType(`New order`)).toEqual({
      type: ActionType.SET_SORT_TYPE,
      payload: `New order`,
    });
  });

  it(`Action creator for setting active pin returns correct action`, () => {
    expect(ActionCreator.setHoveredOffer(1)).toEqual({
      type: ActionType.SET_HOVERED_OFFER,
      payload: 1,
    });
  });
});

describe(`Reducers works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should correctly change city`, () => {
    expect(reducer(initialState, {
      type: ActionType.CHANGE_CITY,
      payload: `Test city`,
    })).toEqual(Object.assign({}, initialState, {currentCity: `Test city`}));
  });

  it(`Reducer should correctly change sorting order`, () => {
    expect(reducer(initialState, {
      type: ActionType.SET_SORT_TYPE,
      payload: `Price`,
    })).toEqual(Object.assign({}, initialState, {sortType: `Price`}));
  });

  it(`Reducer should correctly set active pin ID`, () => {
    expect(reducer(initialState, {
      type: ActionType.SET_HOVERED_OFFER,
      payload: 1,
    })).toEqual(Object.assign({}, initialState, {hoveredOffer: 1}));
  });
});
