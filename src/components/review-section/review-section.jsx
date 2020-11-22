import React from 'react';
import PropTypes from 'prop-types';
import ReviewList from '../review-list/review-list';
import NewReview from '../new-review/new-review';
import withNewReview from "../../hocs/with-new-review";
import {AuthorizationStatus} from '../../const';

const NewReviewWrapped = withNewReview(NewReview);

const ReviewSection = (props) => {
  const {reviews, offer, authorizationStatus, onSubmit} = props;

  return (reviews &&
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      <ReviewList reviews={reviews} />

      {authorizationStatus === AuthorizationStatus.AUTH ? <NewReviewWrapped offer={offer} onSubmit={onSubmit}/> : null}

    </section>);
};

ReviewSection.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  reviews: PropTypes.array,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReviewSection;
