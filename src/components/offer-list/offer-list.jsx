import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import {connect} from 'react-redux';
import {getSorting} from '../../utils';

const OfferList = (props) => {
  const {offers, sorting, onOfferClick, onOfferHover} = props;
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
        />
      ))}
    </div>
  );
};

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferClick: PropTypes.func.isRequired,
  onOfferHover: PropTypes.func.isRequired,
  sorting: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.APPLICATION.offersForCity,
  sorting: state.APPLICATION.sortType,
});

export default connect(mapStateToProps)(OfferList);
