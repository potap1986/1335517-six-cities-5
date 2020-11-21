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
  offers: PropTypes.array.isRequired,
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
  onBookmarkClick: (id, status) => dispatch(ApiActionCreator.changeOfferStatus(id, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
