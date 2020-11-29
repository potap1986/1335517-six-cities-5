import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookmark from '../bookmark/bookmark';
import history from '../../browser-history';
import {MAX_RATE, DEFAULT_HOVER} from '../../const';

const OfferCard = (props) => {
  const {onOfferClick, onBookmarkClick, onOfferHover, offer, className} = props;

  return (
    <article
      className={`place-card ${className === `cities` ? `${className}__place-card` : `${className}__card`}`}
      onMouseOver={() => {
        onOfferHover(offer.id);
      }}
      onMouseLeave={() => {
        onOfferHover(DEFAULT_HOVER);
      }}>
      {offer.isPremium
        &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`place-card__image-wrapper ${className}__image-wrapper`}>
        <Link
          to={`/offer/` + offer.id}
          onClick={() => {
            onOfferClick(offer, history);
          }}>
          <img className="place-card__image" src={offer.previewImage} width={className === `favorites` ? `150` : `260`} height={className === `favorites` ? `110` : `200`} alt="Place image"/>
        </Link >
      </div>
      <div className={`place-card__info ${className === `favorites` ? `${className}__card-info` : ``}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <Bookmark isFavorite={offer.isFavorite} className={`place-card__bookmark`} id={offer.id} onClick={onBookmarkClick} />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating) * 100 / MAX_RATE}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`/offer/` + offer.id}
            onClick={() => {

              onOfferClick(offer, history);
            }}>
            {offer.title}
          </Link >
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};


OfferCard.propTypes = {
  onOfferClick: PropTypes.func.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  onOfferHover: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    hotelCity: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }),
    }),
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    title: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    adults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    hotelHost: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isProUser: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    coordinates: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    id: PropTypes.number.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default React.memo(OfferCard);
