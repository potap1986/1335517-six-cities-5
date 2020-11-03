import React from 'react';
import PropTypes from 'prop-types';
import ReviewList from '../review-list/review-list';
import NewReview from '../new-review/new-review';
import withNewReview from "../../hocs/with-new-review";

const NewReviewWrapped = withNewReview(NewReview);

const ReviewSection = (props) => {
  const {reviews, offer} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews[0].reviews.length}</span></h2>

      <ReviewList reviews={reviews} />

      <NewReviewWrapped offer={offer}/>

    </section>
  );
};

ReviewSection.propTypes = {
  reviews: PropTypes.array.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReviewSection;
