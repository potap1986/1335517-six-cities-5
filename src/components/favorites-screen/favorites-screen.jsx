import OfferCard from '../offer-card/offer-card';
import {noop} from '../../utils';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import {ApiActionCreator} from '../../store/api-actions';

const FavoritesScreen = (props) => {
  const {offers, cities, onBookmarkClick} = props;
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
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
                      <OfferCard key={offer.id} onOfferHover={noop} onOfferClick={noop} offer={offer} className={`favorites`} onBookmarkClick={onBookmarkClick} />
                    ))}

                  </div>

                </li>
              )}
            </ul>
          </section>
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
};

const mapStateToProps = (state) => ({
  offers: state.DATA.offers,
  cities: state.DATA.cities,
});

const mapDispatchToProps = (dispatch) => ({
  onBookmarkClick: (id, status) => dispatch(ApiActionCreator.changeOfferStatus(id, status))
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
