import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import browserHistory from "../../browser-history";

const Bookmark = (props) => {
  const {isFavorite, className, id, onClick, authorizationStatus} = props;

  return (
    <button className={`${className}-button button ${isFavorite && `${className}-button--active`}`} type="button"
      onClick={authorizationStatus === AuthorizationStatus.AUTH ? () => onClick(id, !isFavorite) : () => browserHistory.push(`/login`)}>
      <svg className={`${className}-icon`} width={className === `property__bookmark` ? `31` : `18`} height={className === `property__bookmark` ? `33` : `19`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};

Bookmark.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

export {Bookmark};
export default connect(mapStateToProps)(Bookmark);
