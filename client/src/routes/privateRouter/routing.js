import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ children }) {
  // isauth() returns true or false based on localStorage
  const authed =
    localStorage.getItem('user') &&
    JSON.parse(localStorage.getItem('user')).token;
  return authed ? children : <Navigate to="/" />;
}
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
