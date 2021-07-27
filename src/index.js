import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reducers from "./reducers";
import middleware from "./middleware";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import { createStore } from "redux";
import "./index.css";
import App from "./components/App";

const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
