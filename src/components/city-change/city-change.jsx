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
  allOffers: PropTypes.arrayOf(PropTypes.shape({
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
};

const mapStateToProps = (state) => ({
  currentCity: state.APPLICATION.currentCity,
  cities: state.DATA.cities,
  allOffers: state.DATA.offers,
});

export {CityChange};
export default connect(mapStateToProps)(React.memo(CityChange));
