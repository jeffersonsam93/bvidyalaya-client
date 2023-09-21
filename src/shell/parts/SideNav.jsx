import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import cx from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SettingsIcon from "@material-ui/icons/Settings";
import Divider from "@material-ui/core/Divider";

import sidebarStyle from "styles/shell/sidebarStyle";
import { toggleNav } from "../state/actions";

class SideNav extends Component {
  state = {
    showDate: false,
    currentYear: new Date().getFullYear()
    //buildDate: new Date().toLocaleString()
  };
  activeRoute = routeName => {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  };
  hideBuildDate = () => {
    this.setState({
      showDate: false
    });
  };
  showBuildDate = () => {
    this.setState({
      showDate: true
    });
  };
  render() {
    // const bldStyle = {
    //   paddingBottom: 5,
    //   visibility: this.state.showDate ? "visible" : "hidden"
    // };
    const {
      classes,
      logo,
      image,
      logoText,
      routes,
      open,
      theme,
      toggleNav,
      location
    } = this.props;
    const btnSetting = (
      <IconButton
        color="inherit"
        aria-label="Settings"
        onClick={() => this.props.navigatePath("/setting", location)}
      >
        <SettingsIcon color="inherit" />
      </IconButton>
    );
    var links = (
      <div className={classes.list}>
        <List className={classes.list}>
          {routes.map((prop, key) => {
            if (prop.redirect) return null;
            const listItemClasses = cx({
              [" " + classes.itemLinkSelected]: this.activeRoute(prop.path),
              [" " + classes.itemLinkClose]: !open
            });
            const whiteFontClasses = cx({
              [" " + classes.contrastColorText]: this.activeRoute(prop.path)
            });
            return (
              <ListItem
                button
                key={key}
                onClick={() => this.props.navigatePath(prop.path, location)}
                className={classes.itemLink + listItemClasses}
              >
                <ListItemIcon
                  className={classes.itemIcon + whiteFontClasses}
                  color="inherit"
                >
                  <prop.icon color="inherit" />
                </ListItemIcon>
                <ListItemText
                  primary={prop.sidebarName}
                  className={classes.itemText + whiteFontClasses}
                  disableTypography={true}
                />
              </ListItem>
            );
          })}
        </List>
        <div className={classes.linkDiv}>
          <Divider />
          {open ? (
            <List>
              <ListItem className={classes.bottomSetting}>
                <div
                  className={classes.buildText}
                  // onMouseEnter={this.showBuildDate}
                  // onMouseLeave={this.hideBuildDate}
                >
                  {/* <div style={bldStyle}>Build Date: {this.state.buildDate}</div> */}
                  <div style={{ lineHeight: 1.2 }}>
                    © {this.state.currentYear} Bharathi Vidyalaya Kulipatty<br />
                    All rights reserved
                  </div>
                </div>
                {/* <ListItemText primary="Build Date:" /> */}
                <ListItemSecondaryAction>{btnSetting}</ListItemSecondaryAction>
              </ListItem>
            </List>
          ) : (
            btnSetting
          )}
        </div>
      </div>
    );
    var brand = (
      <div className={classes.toolbar}>
        <a href="/" className={classes.logoLink}>
          <div
            className={classes.logoImage}
            style={{
              backgroundImage: "url(" + logo + ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "35px"
            }}
          >
            {/* <img src={logo} alt="logo" className={classes.img} /> */}
          </div>
          {open ? logoText : null}
        </a>
        <IconButton onClick={toggleNav} color="inherit">
          {theme.direction === "rtl" || !open ? (
            <ChevronRightIcon color="inherit" />
          ) : (
            <ChevronLeftIcon color="inherit" />
          )}
        </IconButton>
      </div>
    );
    return (
      <div>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={toggleNav}
            SlideProps={{
              unmountOnExit: true
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {brand}
            <div className={classes.sidebarWrapper}>
              {/* <HeaderLinks /> */}
              {links}
            </div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            variant="permanent"
            anchor="left"
            classes={{
              paper: cx(classes.drawerPaper, !open && classes.drawerPaperClose)
            }}
            open={open}
          >
            {brand}
            <div className={classes.sidebarWrapper}>{links}</div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    open: state.shell.navOpen,
    location: state.location
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleNav: () => {
      dispatch(toggleNav());
    },
    navigatePath: (path, location) => {
      if (location.pathname.indexOf(path) === -1) {
        dispatch(push(path));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(sidebarStyle, { withTheme: true })(withRouter(SideNav))
);
