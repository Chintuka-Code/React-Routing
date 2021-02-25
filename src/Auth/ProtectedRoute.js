import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuth) {
          return <Component {...props} />;
        } else {
          return <Redirect to={} />;
        }
      }}
    />
  );
};
