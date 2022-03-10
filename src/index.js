import React from "react";
import ReactDOM from "react-dom";
import App from "@containers/App";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logActions, reportError } from "./middlewares";
import rootReducer from "./reducers/rootReducer";
// import pokemonReducer from "./reducers/pokemonReducer";
import pokemonSaga from "./saga";
import "./index.css";

const sagaMiddleware = createSagaMiddleware();
// Se crear un compose customizado
const componseAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composedEnhacers = componseAlt(
  applyMiddleware(sagaMiddleware, logActions, reportError)
);
const store = createStore(rootReducer, composedEnhacers);

sagaMiddleware.run(pokemonSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
