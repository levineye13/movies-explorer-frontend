import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PATHNAME } from '../utils/constants';

const { signin } = PATHNAME;

const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route path={props.path}>
    {props.loggedIn ? <Component {...props} /> : <Redirect to={signin} />}
  </Route>
);

export default ProtectedRoute;
