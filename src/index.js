import React from "react";
import ReactDOM from "react-dom";
import App from "@containers/App";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import pokemonReducer from "./reducers/pokemonReducer";
import { logActions, reportError } from "./middlewares";

// Se crear un compose customizado
const componseAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composedEnhacers = componseAlt(
  applyMiddleware(thunk, logActions, reportError)
);
const store = createStore(pokemonReducer, composedEnhacers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
