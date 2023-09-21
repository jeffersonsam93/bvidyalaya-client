import React, { Component } from "react";
import PropTypes from "prop-types";
import { push } from "react-router-redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import cx from "classnames";
import logo from "../assets/logo.png";

import { authSuccess } from "./state/actions";

import { withStyles } from "@material-ui/core/styles";
import { Card, CardActions, CardContent, CardMedia } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import userSample from "__mocks__/users";

const styles = theme => ({
  card: {
    maxWidth: 350,
    height: 350,
    position: "absolute",
    margin: "-175px 0 0 -175px",
    left: "50%",
    top: "50%"
  },
  cardError: {
    height: 370,
    margin: "-185px 0 0 -175px"
  },
  cardPopup: {
    maxWidth: 275
    //height: 350
    //position: "absolute",
    //margin: "-175px 0 0 -175px",
    //left: "50%",
    //top: "50%"
  },
  cardErrorPopup: {
    //height: 370
    //margin: "-185px 0 0 -175px"
  },
  media: {
    height: 60,
    margin: "12px 5px",
    backgroundSize:'100px',
  },
  margin: {
    margin: theme.spacing.unit
  },
  actions: {
    display: "flex"
  },
  right: {
    marginLeft: "auto",
    marginRight: "10px"
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logInFailed: false,
      isLoaded: false,
      username: "",
      password: ""
    };
    if (process.env.NODE_ENV !== "production") {
      this.state.username = userSample[0].name;
      this.state.password = userSample[0].password;
    }
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleLoginClick(event) {
    const { username, password } = this.state;
    const user = userSample.find(element => {
      return element.name.toLowerCase() === username.toLowerCase();
    });

    if (user && user.password === password) {
      this.setState({ logInFailed: false });
      this.props.login({ name: user.name, fullName: user.fullName });
    } else {
      this.setState({ logInFailed: true });
    }
    event.preventDefault();
    return false;
  }

  //componentDidMount() {
  // fetch("assets/config.json")
  //   .then(res => res.json())
  //   .then(
  //     result => {
  //       this.setState({
  //         isLoaded: true,
  //         apiService: result.apiService
  //       });
  //     },
  //     // Note: it's important to handle errors here
  //     // instead of a catch() block so that we don't swallow
  //     // exceptions from actual bugs in components.
  //     error => {
  //       this.setState({
  //         isLoaded: true,
  //         error
  //       });
  //       console.error(error);
  //     }
  //   );
  //}

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if (this.state[name] !== value) {
      this.setState({ [name]: value });
      if (this.state.logInFailed) {
        this.setState({ logInFailed: false });
      }
    }
  }

  render() {
    const { classes, popup } = this.props;
    const { logInFailed /*, isLoaded*/ } = this.state;
    //const { from } = this.props.location.state || { from: { pathname: "/" } };
    // if (!isLoaded) {
    //   return null;
    // }
    const cardClass = cx({
      [" " + classes.card]: !popup,
      [" " + classes.cardPopup]: popup,
      [" " + classes.cardError]: logInFailed && !popup,
      [" " + classes.cardErrorPopup]: logInFailed && popup
    });

    return (
      <form onSubmit={this.handleLoginClick}>
        <Card className={cx(cardClass)}>
          {!popup && (
            <div style={{ display:'flex' }}>
              <img className={classes.media} src={logo} title="BVPS" />
              <Typography
              variant="h6"
              style={{ textAlign: "center",margin:"25px 0px" }}
              >
                Bharathi Vidyalaya
              </Typography>
            </div>
          )}
          {logInFailed && (
            <Typography
              variant="subheading"
              color="error"
              style={{ textAlign: "center" }}
            >
              Login failed
            </Typography>
          )}
          <CardContent>
            <TextField
              className={classes.margin}
              name="username"
              label="Username"
              onChange={this.handleInputChange}
              value={this.state.username}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
            />

            <TextField
              className={classes.margin}
              name="password"
              label="Password"
              type="password"
              onChange={this.handleInputChange}
              value={this.state.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                )
              }}
            />
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <Button
              className={classes.right}
              variant="raised"
              type="submit"
              size="small"
              onSubmit={this.handleLoginClick}
              color="primary"
            >
              Login
            </Button>
            {/* <Button size="small" color="primary">
              Learn More
          </Button> */}
          </CardActions>
        </Card>
      </form>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(
  connect(null, dispatch => ({
    login: usr => {
      dispatch(authSuccess(usr));
      dispatch(push("/configuration"));
    }
  }))(withStyles(styles)(Login))
);
