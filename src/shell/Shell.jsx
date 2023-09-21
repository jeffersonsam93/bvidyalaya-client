import React, { Component } from "react";
//import PropTypes from "prop-types";
//import { push } from "react-router-redux";
import { connect } from "react-redux";

import { withRouter, Route, Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import shellStyle from "styles/shell/shellStyle";

import SideNav from "./parts/SideNav";

//import image from "assets/img/sidebar-2.jpg";
import logo from "assets/logo.png";

import { toggleNav } from "./state/actions";
import appRoutes from "../modules";
import HeaderLinks from "./parts/HeaderLinks";
import Setting from "./parts/Setting";

class Shell extends Component {
  activeRoute(routeName) {
    return this.props.location &&
      this.props.location.pathname &&
      this.props.location.pathname.indexOf(routeName) > -1
      ? true
      : false;
  }

  render() {
    const { classes, toggleNav, location, open, ...rest } = this.props;
    var navbarName = "/setting" === location.pathname ? "Settings" : "";
    appRoutes.map((prop, key) => {
      if (location && prop.path === location.pathname) {
        navbarName = prop.navbarName;
        return navbarName;
      }
      return null;
    });
    return (
      <div className={classes.root}>
        <SideNav
          routes={appRoutes}
          logoText={"BVPS"}
          logo={logo}
          color="blue"
          {...rest}
        />
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!open} className={classes.toolbar}>
            <Hidden smDown>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleNav}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="title" color="inherit" noWrap>
              {navbarName}
            </Typography>
            <Hidden mdDown>
              <HeaderLinks className={classes.headerLinks} />
            </Hidden>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleNav}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.actualContent}>
            {appRoutes.map((route, index) => {
              if (route.redirect)
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact
                    render={() => <Redirect from={route.path} to={route.to} />}
                  />
                );
              //   return <Redirect from={route.path} exact={true} to={route.to} key={index} />;
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact
                  component={route.component}
                />
              );
            })}
            <Route path="/setting" exact component={Setting} />
            {/* <Route path="*" render={() => <Redirect to="/notfound" />} /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    open: state.shell.navOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleNav: () => {
      dispatch(toggleNav());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(withStyles(shellStyle, { withTheme: true })(Shell))
);
