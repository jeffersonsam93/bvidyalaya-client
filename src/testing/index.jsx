import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import store, { history } from "./store";
import { primaryColor } from "styles/variable";

const theme = createMuiTheme({
  palette: {
    primary: { main: primaryColor }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  },
});

const TestWrapper = props => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <MemoryRouter>{props.children}</MemoryRouter>
    </MuiThemeProvider>
  </Provider>
);

export { store, history };
export default TestWrapper;
