import React from "react";
import ReactDOM from "react-dom";
import App from "@containers/App";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { logActions, reportError } from "./middlewares";
import rootReducer from "./reducers/rootReducer";
import "./index.css";

const componseAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhacers = componseAlt(
  applyMiddleware(thunk, logActions, reportError)
);
const store = createStore(rootReducer, composedEnhacers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
