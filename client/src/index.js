import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
// Store
import store from "./store";

ReactDOM.render(
  <App />,

  document.getElementById("root")
);

serviceWorker.unregister();
