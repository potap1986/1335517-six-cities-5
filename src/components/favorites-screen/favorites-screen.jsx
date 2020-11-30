import OfferCard from '../offer-card/offer-card';
import {noop} from '../../utils';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import {ApiActionCreator} from '../../store/api-actions';

const FavoritesScreen = (props) => {
  const {offers, cities, onBookmarkClick, onOfferClick} = props;
  const favoriteOffers = React.useMemo(
      () => offers.filter((offer) => offer.isFavorite),
      [offers]
  );

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length === 0 ?
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div>
            </section>
            :
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cities.map((city, index) => (favoriteOffers.filter((offer) => offer.hotelCity.name === city).length > 0)
                  &&
                  <li key={`${city}-${index}`} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">

                      {favoriteOffers.filter((offer) => offer.hotelCity.name === city).map((offer) => (
                        <OfferCard key={offer.id} onOfferHover={noop} onOfferClick={onOfferClick} offer={offer} className={`favorites`} onBookmarkClick={onBookmarkClick} />
                      ))}

                    </div>

                  </li>
                )}
              </ul>
            </section>
          }
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  onOfferClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.DATA.offers,
  cities: state.DATA.cities,
});

const mapDispatchToProps = (dispatch) => ({
  onBookmarkClick: (id, status) => {
    dispatch(ApiActionCreator.changeOfferStatus(id, status, () => dispatch(ApiActionCreator.fetchOffers())));
  }
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
