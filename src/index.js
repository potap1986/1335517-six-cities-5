import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './services/api';
import {Provider} from "react-redux";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {ApiActionCreator} from './store/api-actions';
import {redirect} from "./store/middlewares/redirect";

import history from './browser-history';
import 'leaflet/dist/leaflet.css';

const dispatchCB = (...args) => store.dispatch(...args);
const loginCB = () => history.push(`/login`);

const api = createAPI(dispatchCB, loginCB);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(ApiActionCreator.checkAuth());

Promise.all([
  store.dispatch(ApiActionCreator.fetchOffers()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
});
