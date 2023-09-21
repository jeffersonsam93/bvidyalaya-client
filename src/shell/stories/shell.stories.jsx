import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Shell from "../Shell";
import SideNav from "../parts/SideNav";
import logo from "assets/logo.svg";

import appRoutes from "modules";
import Login from "../Login";
import Setting from "../parts/Setting";

storiesOf("Shell", module)
  .add("Login", () => <Login />)
  .add("Setting", () => <Setting />)
  .add("Left Navigation", () => (
    <SideNav routes={appRoutes} logoText={"Eagle"} logo={logo} color="white" />
  ))
  .add("Shell", () => <Shell />);
