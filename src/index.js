import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  ERRORS_COUNT: 3
};

const bodyElement = document.querySelector(`body`);
bodyElement.textContent = `Hello, world!`;

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
    />,
    document.querySelector(`#root`)
);
