import OfferCard from '../offer-card/offer-card';
import {noop} from '../../utils';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import {ApiActionCreator} from '../../store/api-actions';

const FavoritesScreen = (props) => {
  const {offers, cities, onBookmarkClick, onOfferClick} = props;
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.lenght === 0 ?
            <section classNlass="favorites favorites--empty">
              <h1 classNlass="visually-hidden">Favorites (empty)</h1>
              <div classNlass="favorites__status-wrapper">
                <b classNlass="favorites__status">Nothing yet saved.</b>
                <p classNlass="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
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
  offers: PropTypes.array.isRequired,
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
    dispatch(ApiActionCreator.changeOfferStatus(id, status));
    dispatch(ApiActionCreator.fetchOffers());
  }
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
