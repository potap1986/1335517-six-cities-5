import React from 'react';
import PropTypes from 'prop-types';
import Map from '../map/map';
import Sort from '../sort/sort';
import OfferList from '../offer-list/offer-list';
import CityChange from '../city-change/city-change';
import EmptyMainPage from '../empty-main-page/empty-main-page';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const {changeCity, resetSortType, resetHoveredOffer, setCityOffers, /* resetCityOffers, loadOffers, */setHoveredOffer, setSortType} = ActionCreator;

const MainPage = (props) => {
  const {offers, hoveredOffer, city, onOfferClick, onCityChange, onSortTypeClick, onOfferHover} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">

          <CityChange onCityChange={onCityChange} />

        </div>
        <div className="cities">
          {offers.length === 0
            ?
            <EmptyMainPage city={city}/>
            :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${offers.length} ${offers.length > 1 ? `places` : `place`}`} to stay in {city}</b>
                <Sort onSortTypeClick={onSortTypeClick}/>

                <OfferList onOfferClick={onOfferClick} onOfferHover={onOfferHover}/>

              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers} hoveredOffer={hoveredOffer} />
                </section>
              </div>
            </div>
          }
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offers: PropTypes.array.isRequired,
  hoveredOffer: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  onOfferHover: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.APPLICATION.currentCity,
  offers: state.APPLICATION.offersForCity,
  hoveredOffer: state.APPLICATION.hoveredOffer,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange: (city, allOffers) => {
    dispatch(resetSortType());
    dispatch(resetHoveredOffer());
    dispatch(changeCity(city));
    dispatch(setCityOffers(allOffers.filter((offer) => offer.hotelCity.name === city)));
  },
  onOfferHover(offer) {
    dispatch(setHoveredOffer(offer));
  },
  onSortTypeClick(sort) {
    dispatch(resetHoveredOffer());
    dispatch(setSortType(sort));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
