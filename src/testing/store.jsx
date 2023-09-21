import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import * as reducers from "../core/state/reducers";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createMemoryHistory from "history/createMemoryHistory";

const history = createMemoryHistory();

// history.push = action("history.push");
// history.replace = action("history.replace");
// history.go = action("history.go");
// history.goBack = action("history.goBack");
// history.goForward = action("history.goForward");

function configureStore(initialState, history) {
  let rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  const enhancer = compose(
    applyMiddleware(routerMiddleware(history), thunkMiddleware)
    // other store enhancers if any
  );

  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore({}, history);

export { history };
export default store;
