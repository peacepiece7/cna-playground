// wrapper & store
// before redux-next-wrapper@7
// refer to this site -> https://cotak.tistory.com/164

import { applyMiddleware, compose, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

// index.js counter.js
import reducer from "./module";
import mySaga from "../sagas";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);

  store.sagaTask = sagaMiddleware.run(mySaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.NODE_ENV === "development",
});

export default wrapper;
