import React from "react";
import PropTypes from "prop-types";

// обычно делают так, но и так как делаешь ты, ошибкой не является
const Bookmark = ({isFavorite, className}) => {
  return (
    <button className={`${className}-button button ${isFavorite && `${className}-button--active`}`} type="button">
      <svg className={`${className}-icon`} width={className === `property__bookmark` ? `31` : `18`} height={className === `property__bookmark` ? `33` : `19`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};

Bookmark.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default Bookmark;
