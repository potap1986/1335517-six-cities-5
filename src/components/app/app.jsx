import React, {Fragment} from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/"
          render={({history}) => (
            <MainPage
              onOfferClick={() => history.push(`/offer/666`)}
            />
          )}
        />
        <Route exact path ="/login">
          <LoginScreen />
        </Route>
        <Route exact path ="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path ="/offer/:id">
          <OfferScreen />
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

App.propTypes = {};

export default App;
