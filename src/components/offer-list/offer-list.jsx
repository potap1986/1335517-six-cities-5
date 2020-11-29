import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import {connect} from 'react-redux';
import {getSorting} from '../../utils';
import {ApiActionCreator} from '../../store/api-actions';

const OfferList = (props) => {
  const {offers, sorting, onOfferClick, onOfferHover, onBookmarkClick} = props;
  const sortedOffers = getSorting(offers, sorting);
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onOfferHover={onOfferHover}
          onOfferClick={onOfferClick}
          className={`cities`}
          onBookmarkClick={onBookmarkClick}
        />
      ))}
    </div>
  );
};

OfferList.propTypes = {
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
  onOfferClick: PropTypes.func.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  onOfferHover: PropTypes.func.isRequired,
  sorting: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.APPLICATION.offersForCity,
  sorting: state.APPLICATION.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  onBookmarkClick: (id, status) => {
    dispatch(ApiActionCreator.changeOfferStatus(id, status, () => dispatch(ApiActionCreator.fetchOffers())));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
