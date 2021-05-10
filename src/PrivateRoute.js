import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const PrivateRoute = ({ children, ...rest }) => {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
