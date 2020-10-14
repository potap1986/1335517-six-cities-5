import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';

const CommentsList = (props) => {
  const {comments} = props;

  return (
    comments.reviews.map((review, index) => (
      <ReviewItem
        key={`${review.id}-${index}`}
        review={review}
      />
    ))
  );

};


CommentsList.propTypes = {
  comments: PropTypes.object.isRequired,
};

export default CommentsList;
