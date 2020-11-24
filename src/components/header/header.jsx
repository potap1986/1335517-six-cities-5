import React from 'react';
import PropTypes from 'prop-types';
import {getUserAvatar} from '../../utils';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';


const Header = (props) => {
  const {authorizationStatus, user} = props;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={authorizationStatus === AuthorizationStatus.NO_AUTH ? `/login` : `/favorites`}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    {getUserAvatar(authorizationStatus, user.avatarUrl)}
                  </div>
                  <span className="header__user-name user__name">{authorizationStatus === AuthorizationStatus.NO_AUTH ? `Sign In` : user.email}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
  user: state.USER.user,
});

export {Header};
export default connect(mapStateToProps)(Header);
