import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
//import { Route, Switch } from "react-router";
import createHistory from "history/createBrowserHistory";
import { PrivateRoute, Shell, Login } from "./shell";
import configureStore from "./core/state/store";
import PageNotFound from "./components/PageNotFound";
import { Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//import purple from "material-ui/colors/purple";
import "typeface-roboto";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { primaryColor } from "styles/variable";

const history = createHistory();

const store = configureStore({}, history);
const persistor = persistStore(store);

const indexRoutes = [{ path: "/", component: Shell }];

const theme = createMuiTheme({
  palette: {
    primary: { main: primaryColor }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  },
});

const html = ReactDOMServer.renderToString(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MuiThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Switch>
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
            <Route path="/*" component={PageNotFound} />
          </Switch>
        </ConnectedRouter>
      </MuiThemeProvider>
    </PersistGate>
  </Provider>
);

console.log(html);

