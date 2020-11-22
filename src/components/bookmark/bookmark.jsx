import React from "react";
import PropTypes from "prop-types";

const Bookmark = (props) => {
  const {isFavorite, className, id, onClick} = props;

  return (
    <button className={`${className}-button button ${isFavorite && `${className}-button--active`}`} type="button" onClick={() => onClick(id, !isFavorite)}>
      <svg className={`${className}-icon`} width={className === `property__bookmark` ? `31` : `18`} height={className === `property__bookmark` ? `33` : `19`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};

Bookmark.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Bookmark;
