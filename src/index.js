import React from "react";
import * as ReactDOM from 'react-dom/client';
import createHistory from "history/createBrowserHistory";
import PageNotFound from "./home/components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Home } from "./home";
import createTheme from "./styles/theme";
import "typeface-roboto";
import "./index.css";
import * as theme from "./styles/variable";
import registerServiceWorker from "./registerServiceWorker";

const history = createHistory();;

const Root = props => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/notfound" element={<PageNotFound/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
);


//console.log(theme);
console.log(process.env);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Root />
);
registerServiceWorker();
