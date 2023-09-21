import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
// import IconButton from "material-ui/IconButton";
// import AccountCircle from "@material-ui/icons/AccountCircle";
import { Menu, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
//import purple from "material-ui/colors/purple";
import { changePrimary } from "core/state/actions";
import { primaryColor } from "styles/variable";
import { authFail } from "../state/actions";
import UserAvatar from "../../components/Avatars/UserAvatar";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  userAvatar: {
    float: "right"
  }
};

class HeaderLinks extends Component {
  state = {
    open: false,
    colorSet: false,
    anchorEl: null
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, open: false });
  };
  handleMenu = event => {
    this.setState({
      anchorEl: event.currentTarget,
      open: true
    });
  };

  handleMenuItem = () => {
    if (this.state.colorSet) {
      this.props.changePrimary("#9c27b0");
    } else {
      this.props.changePrimary(primaryColor);
    }
    this.setState({
      anchorEl: null,
      open: false,
      colorSet: !this.state.colorSet
    });
  };

  render() {
    const { user, className, logout, classes } = this.props;
    const { open, anchorEl } = this.state;
    return (
      <div className={className}>
        <UserAvatar
          className={classes.userAvatar}
          user={user}
          aria-owns={open ? "menu-appbar" : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
        />
        {/* <IconButton
          aria-owns={open ? "menu-appbar" : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton> */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleMenuItem}>Profile</MenuItem>
          <MenuItem onClick={this.handleMenuItem}>My account</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.location,
    user: state.login.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePrimary: col => {
      dispatch(changePrimary(col));
    },
    navigatePath: (path, location) => {
      if (location.pathname.indexOf(path) === -1) {
        dispatch(push(path));
      }
    },
    logout: () => {
      dispatch(authFail());
      dispatch(push("/login"));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(HeaderLinks)
);
