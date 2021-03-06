import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';

const ReviewList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10).map((review, index) => (
        <ReviewItem
          key={`${review.id}-${index}`}
          review={review}
        />
      ))}
    </ul>
  );

};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        localUser: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          isPro: PropTypes.bool.isRequired,
          avatarUrl: PropTypes.string.isRequired,
        }).isRequired,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })).isRequired,
};

export default ReviewList;
