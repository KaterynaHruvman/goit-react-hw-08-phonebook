import { useSelector } from 'react-redux';
import { getIsAuthenticated } from './redux/auth/auth_selector';
import { Route, Redirect } from 'react-router-dom';
import React from 'react';
const PrivatRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isLoginOn = useSelector(state => getIsAuthenticated(state));
  return (
    <Route
      {...routeProps}
      render={props =>
        isLoginOn ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
};
export default PrivatRoute;
