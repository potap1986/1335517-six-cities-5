import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../bookmark/bookmark';

const OfferCard = (props) => {
  const {onOfferClick, onOfferHover, offer, className} = props;

  return (
    <article
      className={`place-card ${className === `cities` ? `${className}__place-card` : `${className}__card`}`}
      onMouseOver={(evt) => {
        evt.preventDefault();
        onOfferHover();
      }}>
      {offer.isPremium
        &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`place-card__image-wrapper ${className}__image-wrapper`}>
        <a
          href="#"
          onClick={(evt) => {
            evt.preventDefault();
            onOfferClick();
          }}>
          <img className="place-card__image" src={offer.image[0]} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className={`place-card__info ${className === `favorites` ? `${className}__card-info` : ``}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <Bookmark isBookmarked={offer.isBookmarked} className={`place-card__bookmark`} />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rate * 100 / 5}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              onOfferClick();
            }}>
            {offer.title}
          </a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};


OfferCard.propTypes = {
  onOfferClick: PropTypes.func.isRequired,
  onOfferHover: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired
  }).isRequired,
  className: PropTypes.string,
};

export default OfferCard;
