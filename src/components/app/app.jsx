import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import {Router as BrowserRouter, Route, Switch, Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import PrivateRoute from '../private-route/private-route';
import MainPage from "../main-page/main-page";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";
import browserHistory from "../../browser-history";
import {AppRoute, AuthorizationStatus} from '../../const';
import {ApiActionCreator} from '../../store/api-actions';


const App = (props) => {
  const {authorizationStatus, onOfferClick} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path = {AppRoute.MAIN_PAGE}
          render={() => (
            <MainPage
              onOfferClick={onOfferClick}
            />
          )}
        />
        <Route exact path = {AppRoute.LOGIN}
          render={(compProps) => authorizationStatus === AuthorizationStatus.NO_AUTH ? <LoginScreen {...compProps} /> : <Redirect to="/" />}
        />
        <PrivateRoute exact path={AppRoute.FAVORITES} render={() => <FavoritesScreen onOfferClick={onOfferClick} />} />
        <Route exact path = {AppRoute.OFFER}
          render={(routerProps) => {
            return <OfferScreen {...routerProps} />;
          }}
        />
        <Route
          render={() => (
            <Fragment>
              <h1 style={{textAlign: `center`}}>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link style={{display: `block`, color: `blue`, width: `100%`, textAlign: `center`}} to= {AppRoute.MAIN_PAGE}>Go to main</Link>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onOfferClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onOfferClick: (offer, history) => {
    history.push(`/offer/${offer.id}`);
    dispatch(ApiActionCreator.fetchNearOffers(offer.id));
    dispatch(ApiActionCreator.loadReviews(offer.id));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
