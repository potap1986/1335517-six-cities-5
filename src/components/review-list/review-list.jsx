import React from 'react';
import PropTypes from 'prop-types';
// import CommentsList from '../comments-list/comments-list';
import ReviewItem from '../review-item/review-item';

const ReviewList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review, index) => (
        <ReviewItem
          key={`${review.id}-${index}`}
          review={review}
        />
      ))}
    </ul>
  );

};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewList;
