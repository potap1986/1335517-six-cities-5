import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../header/header';
import {noop} from '../../utils';
import Map from '../map/map';
import Bookmark from '../bookmark/bookmark';
import OfferCard from '../offer-card/offer-card';
import ReviewSection from '../review-section/review-section';
import {ApiActionCreator} from "../../store/api-actions";
import {MAX_RATE} from '../../const';

const OfferScreen = (props) => {
  const {offer, nearOffers, reviews, onOfferLoad, onNearOffersLoad, onReviewsLoad, onReviewPost, onBookmarkClick, onNearBookmarkClick, authorizationStatus} = props;
  const getOfferId = () => props.match.params.id;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [offer]);
  const idOffer = getOfferId();
  React.useEffect(() => {
    onOfferLoad(idOffer);
    onNearOffersLoad(idOffer);
    onReviewsLoad(idOffer);
  }, [idOffer]);

  return (
    <div className="page">
      <Header />
      {offer ? <main className="page__main page__main--property">
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

                <Bookmark className={`property__bookmark`} isFavorite={offer.isFavorite} id={offer.id} onClick={onBookmarkClick}/>

              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(offer.rating) * 100 / MAX_RATE}%`}}></span>
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

              <ReviewSection reviews={reviews} offer={offer} authorizationStatus={authorizationStatus} onSubmit={onReviewPost}/>

            </div>
          </div>
          <section className="property__map map">
            {nearOffers && <Map offers={[...nearOffers, offer]} hoveredOffer={offer.id} />}
          </section>
        </section>


        {nearOffers && <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              {nearOffers.map((otherOffer) => (
                otherOffer !== offer &&
                <OfferCard key={otherOffer.id} onOfferHover={noop} onOfferClick={noop} offer={otherOffer} className={`near-places`} onBookmarkClick={onNearBookmarkClick.bind(null, offer.id)}/>
              ))}

            </div>
          </section>
        </div>
        }
      </main> : <div>Загрузка</div>}
    </div>
  );
};

OfferScreen.propTypes = {
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
  }),
  onBookmarkClick: PropTypes.func.isRequired,
  onNearBookmarkClick: PropTypes.func.isRequired,
  nearOffers: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        localUser: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          isPro: PropTypes.bool.isRequired,
          avatarUrl: PropTypes.string.isRequired,
        }).isRequired,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })),
  onOfferLoad: PropTypes.func.isRequired,
  onNearOffersLoad: PropTypes.func.isRequired,
  onReviewsLoad: PropTypes.func.isRequired,
  onReviewPost: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  nearOffers: state.DATA.nearOffers,
  offer: state.DATA.offer,
  reviews: state.DATA.reviews,
  authorizationStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onOfferLoad(offer) {
    dispatch(ApiActionCreator.fetchOffer(offer));
  },
  onNearOffersLoad(offer) {
    dispatch(ApiActionCreator.fetchNearOffers(offer));
  },
  onReviewsLoad(reviews) {
    dispatch(ApiActionCreator.loadReviews(reviews));
  },
  onBookmarkClick: (id, status) => {
    dispatch(ApiActionCreator.changeOfferStatus(id, status, () => dispatch(ApiActionCreator.fetchOffer(id))));
  },
  onNearBookmarkClick: (mainId, id, status) => {
    dispatch(ApiActionCreator.changeOfferStatus(id, status, () => dispatch(ApiActionCreator.fetchNearOffers(mainId))));
  },
  onReviewPost: (id, review, successCallback, failureCallback) => {
    dispatch(ApiActionCreator.postReview(id, review, successCallback, failureCallback));
  },
});

export {OfferScreen};
export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);
