import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  PLACES_COUNT: 30
};

ReactDOM.render(
    <App
      plasesCount={Settings.PLACES_COUNT}
    />,
    document.querySelector(`#root`)
);
