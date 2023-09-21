import React, { Component } from "react";
import { Redirect,Route } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRouteContainer extends Component {
  render() {
    const { user, component: Component, ...props } = this.props;

    return (
      <Route
        {...props}
        render={props =>
          user ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

const PrivateRoute = connect(state => ({
  user: state.login.user
}))(PrivateRouteContainer);

export default PrivateRoute;
