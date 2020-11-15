import React, {Fragment} from "react";
import {Router as BrowserRouter, Route, Switch, Link} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";
import browserHistory from "../../browser-history";
import {AppRoute} from '../../const';

const App = () => {
  const [activeOffer, setActiveOffer] = React.useState(null);

  const getActiveOffer = (offer) => {
    setActiveOffer(offer);
  };

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path = {AppRoute.MAIN_PAGE}
          render={({history}) => (
            <MainPage
              onOfferClick={(offer) => {
                getActiveOffer(offer);
                history.push(`/offer/${offer.id}`);
              }}
            />
          )}
        />
        <Route exact path = {AppRoute.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path = {AppRoute.FAVORITES}>
          <FavoritesScreen />
        </Route>
        <Route exact path = {AppRoute.OFFER}>
          <OfferScreen offer={activeOffer}/>
        </Route>
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

App.propTypes = {};

export default App;
