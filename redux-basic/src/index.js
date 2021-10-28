import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./App";

import counterReducer from "./store/reducers/counter";
import listReducer from "./store/reducers/list";

const rootReducer = combineReducers({
  counterStore: counterReducer,
  listStore: listReducer, 
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);