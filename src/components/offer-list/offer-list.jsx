import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import {connect} from 'react-redux';

const OfferList = (props) => {
  const {offers, onOfferClick, onOfferHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
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
};

const mapStateToProps = (state) => ({
  offers: state.sortedOffers,
});

export {OfferList};
export default connect(mapStateToProps)(OfferList);
