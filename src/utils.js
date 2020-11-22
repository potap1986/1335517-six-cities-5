import React from 'react';
import {AuthorizationStatus, Sorting} from './const';

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

export const getUserAvatar = (status, avatar) => {
  return status === AuthorizationStatus.NO_AUTH ? `` : <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="User avatar"/>;
};

export const updateOffers = (allOffers, newOffer) => {
  const changedItemIndex = allOffers.findIndex((item) => item.id === newOffer.id);
  allOffers[changedItemIndex].isFavorite = !allOffers[changedItemIndex].isFavorite;
  return allOffers;
};
