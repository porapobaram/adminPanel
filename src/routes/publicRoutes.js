import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../ui/components/LoginPage';
import RegisterPage from '../ui/components/RegisterPage';

const PublicRoutes = () => {
	return (
		<Switch>
			<Route exact path="/auth/login">
				<LoginPage />
			</Route>
			<Route exact path="/auth/register">
				<RegisterPage />
			</Route>
		</Switch>
	);
};

export { PublicRoutes };
