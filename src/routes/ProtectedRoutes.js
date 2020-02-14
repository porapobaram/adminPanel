import React from 'react';
import { Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default-member
import PrivateRoute from '../ui/components/AuthHOC';
import BarCrawlPage from '../ui/components/BarCrawlPage'

const ProtectedRoutes = () => {
	return (
		<Switch>
			<PrivateRoute exact path="/">
				<p>Home page</p>
			</PrivateRoute>
			<PrivateRoute exact path="/adminBarCrawl">
				<BarCrawlPage />
			</PrivateRoute>
		</Switch>
	);
};

export { ProtectedRoutes };
