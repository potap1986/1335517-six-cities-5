import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Map from '../map/map';
import Bookmark from '../bookmark/bookmark';
import OfferCard from '../offer-card/offer-card';
import ReviewSection from '../review-section/review-section';
import {ActionCreator} from '../../store/action';

const {setHoveredOffer} = ActionCreator;

const OfferScreen = (props) => {
  const {offer, offers, reviews, hoveredOffer, onOfferHover} = props;
  const propertyReviews = React.useMemo(() => {
    return reviews.filter((review) => review.id === offer.id);
  }, [reviews]);
  const indexOffer = offers.indexOf(offer);
  const nearOffers = offers.slice(indexOffer - 1, indexOffer + 2);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((img, id) => (
                <div key={`image-${id}`} className="property__image-wrapper">
                  <img className="property__image" src={`${img}`} alt={`${offer.title}`}/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">

              {offer.isPremium
                &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>

                <Bookmark className={`property__bookmark`} isFavorite={offer.isFavorite} />

              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offer.rating * 100 / 5}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              {offer.goods.length !== 0
                &&
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.goods.map((facility, index) =>(
                      <li key={`${facility}-${index}`} className="property__inside-item">
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>}

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  {offer.hotelHost.isProUser
                    ?
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={offer.hotelHost.avatar} width="74" height="74" alt="Host avatar"/>
                    </div>
                    :
                    <div className="property__avatar-wrapper user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={offer.hotelHost.avatar} width="74" height="74" alt="Host avatar"/>
                    </div>}

                  <span className="property__user-name">
                    {offer.hotelHost.name}
                  </span>
                </div>

                {offer.description !== 0
                  &&
                  <div className="property__description">
                    {offer.description}
                  </div>}

              </div>

              <ReviewSection reviews={propertyReviews} offer={offer} />

            </div>
          </div>
          <section className="property__map map">
            <Map offers={nearOffers} hoveredOffer={hoveredOffer} />
          </section>
        </section>


        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              {nearOffers.map((otherOffer) => (
                otherOffer !== offer &&
                <OfferCard key={otherOffer.id} onOfferHover={onOfferHover} onOfferClick={()=>({})} offer={otherOffer} className={`near-places`}/>
              ))}

            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferScreen.propTypes = {
  offer: PropTypes.object.isRequired,
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  hoveredOffer: PropTypes.number.isRequired,
  onOfferHover: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.APPLICATION.offersForCity,
  reviews: state.DATA.reviews,
  hoveredOffer: state.APPLICATION.hoveredOffer,
});

const mapDispatchToProps = (dispatch) => ({
  onOfferHover(offer) {
    dispatch(setHoveredOffer(offer));
  },
});

export {OfferScreen};
export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);
