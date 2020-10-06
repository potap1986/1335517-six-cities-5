import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";


const App = (props) => {
  const {placesCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/">
          <MainPage placesCount={placesCount} />
        </Route>
        <Route exact path ="/login">
          <LoginScreen />
        </Route>
        <Route exact path ="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path ="/offer/:id?" component={OfferScreen} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
