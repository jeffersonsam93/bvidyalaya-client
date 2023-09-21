import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import * as reducers from "./reducers";
import { createLogger } from "./middlewares";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { persistReducer } from "redux-persist";
import eglStorage from "../eglStorage";

export default function configureStore(
  initialState,
  history,
  presistant = true
) {
  let rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  if (presistant) {
    const persistConfig = {
      key: "egl-state",
      storage: eglStorage
    };
    rootReducer = persistReducer(persistConfig, rootReducer);
  }

  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          name: "Eagle",
          actionsBlacklist: ["REDUX_STORAGE_SAVE"]
        })
      : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
      createLogger(true)
    )
    // other store enhancers if any
  );

  return createStore(rootReducer, initialState, enhancer);
}
