import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { connect } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { PrivateRoute, Shell, Login } from "./shell";
import configureStore from "./core/state/store";
import PageNotFound from "./components/PageNotFound";
import { Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Home } from "./home";
import createTheme from "./styles/theme";
import "typeface-roboto";
import "./index.css";

//chart list css
// import "chartist/dist/chartist.min.css";
// import "chartist/dist/chartist.min.js";

import registerServiceWorker from "./registerServiceWorker";

const history = createHistory();

const store = configureStore({}, history);
const persistor = persistStore(store);

const indexRoutes = [{ path: "/", component: Shell }];

const Root = props => (
  <MuiThemeProvider theme={createTheme(props.setting)}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        {indexRoutes.map((prop, key) => {
          return (
            <PrivateRoute
              path={prop.path}
              component={prop.component}
              key={key}
            />
          );
        })}
        <Route path="/notfound" component={PageNotFound} />
        <Route component={PageNotFound} />
      </Switch>
    </ConnectedRouter>
  </MuiThemeProvider>
);

const mapStateToProps = state => {
  return {
    setting: state.setting
  };
};

const RootContainer = connect(mapStateToProps, {})(Root);

//console.log(theme);
console.log(process.env);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootContainer />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
