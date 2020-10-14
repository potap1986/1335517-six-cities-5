import React from 'react';
import PropTypes from 'prop-types';
import CommentsList from '../comments-list/comments-list';

const ReviewList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((comments, index) => (
        <CommentsList
          key={`${comments.id}-${index}`}
          comments={comments}
        />
      ))}
    </ul>
  );

};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewList;
