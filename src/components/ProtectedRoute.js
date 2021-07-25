import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const allowPass = restOfProps.authedUser;
  return (
    <Route
      {...restOfProps}
      render={(props) => {
        return allowPass ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(ProtectedRoute));
