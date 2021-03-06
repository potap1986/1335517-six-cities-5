import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import {MAX_RATE} from '../../const';

const formatDateString = (date) => {
  return moment(date).format(`MMMM YYYY`);
};

const ReviewItem = (props) => {
  const {review} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`${review.localUser.avatarUrl}`} width="54" height="54" alt={`${review.localUser.name} avatar`}/>
        </div>
        <span className="reviews__user-name">
          {review.localUser.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(review.rating) * 100 / MAX_RATE}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{formatDateString(review.date)}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    localUser: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewItem;
