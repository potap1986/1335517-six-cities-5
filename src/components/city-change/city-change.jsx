import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const CityChange = (props) => {
  const {currentCity, cities, onCityChange, allOffers} = props;
  onCityChange(currentCity, allOffers);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, index) => (
          <li key={`${city}-${index}`} className="locations__item">
            <a
              onClick={(evt) => {
                evt.preventDefault();
                onCityChange(city, allOffers);
              }}
              className={`locations__item-link tabs__item ${city === currentCity ? `tabs__item--active` : ``}`}
              href="#">
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

CityChange.propTypes = {
  onCityChange: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentCity: PropTypes.string.isRequired,
  allOffers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.APPLICATION.currentCity,
  cities: state.DATA.cities,
  allOffers: state.DATA.offers,
});

export {CityChange};
export default connect(mapStateToProps)(CityChange);
