import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";


const App = (props) => {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/"
          render={({history}) => (
            <MainPage
              offers={offers}
              onOfferClick={() => history.push(`/offer/666`)}
            />
          )}
        />
        <Route exact path ="/login">
          <LoginScreen />
        </Route>
        <Route exact path ="/favorites">
          <FavoritesScreen offers={offers} />
        </Route>
        <Route exact path ="/offer/:id">
          <OfferScreen
            offers={offers}
            reviews={reviews}
          />
        </Route>
        <Route
          render={() => (
            <Fragment>
              <h1 style={{textAlign: `center`}}>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link style={{display: `block`, color: `blue`, width: `100%`, textAlign: `center`}} to="/">Go to main</Link>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

export default App;
