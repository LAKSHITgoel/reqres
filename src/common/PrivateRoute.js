import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, exact, auth, path }, ...rest) => {
  if (auth.isLoggedIn) {
    return <Route exact={exact} path={path} component={Component} {...rest} />;
  } else {
    return <Redirect to="/login" />;
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(PrivateRoute);
