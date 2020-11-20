import {Sorting} from './const';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const noop = () => {};

export const getSorting = (offers, sort) => {
  switch (sort) {
    case Sorting.POPULAR:
      return offers.slice();
    case Sorting.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);
    case Sorting.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);
    case Sorting.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers.slice();
  }
};
