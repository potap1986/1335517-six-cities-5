import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";

const formatDateString = (date) => {
  return moment(date).format(`MMMM YYYY`);
};

const ReviewItem = (props) => {
  const {review} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`${review.avatar}`} width="54" height="54" alt={`${review.author} avatar`}/>
        </div>
        <span className="reviews__user-name">
          {review.author}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${review.rating * 100 / 5}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{formatDateString(review.date)}</time> {/* пока оставлю дату нетронутой */}
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReviewItem;
