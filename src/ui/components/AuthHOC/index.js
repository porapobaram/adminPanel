import React from 'react';
import cookie from 'react-cookies';
import { func, element } from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const propTypes = {
	children: element,
	checkAuth: func,
};

const PrivateRoute = ({ children, ...props }) => {
	const token = cookie.load('token');

	// eslint-disable-next-line react/jsx-props-no-spreading
	return !!token && token !== 'undefined' ? <Route {...props}>{children}</Route> : <Redirect to="/auth/login" />;
};

PrivateRoute.propTypes = propTypes;

export default PrivateRoute;
