import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRouter({
  component: Component,
  redirectPath,
  redirectCondition,
  isExact,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        redirectCondition ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectPath,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRouter;
