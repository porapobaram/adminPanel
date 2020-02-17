import React from 'react';
import { Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default-member
import PrivateRoute from '../ui/components/AuthHOC';
import BarCrawlPage from '../ui/components/BarCrawlPage';
import Bars from '../ui/components/Bars';

const ProtectedRoutes = () => {
	return (
		<Switch>
			<PrivateRoute exact path="/">
				<p>Home page</p>
			</PrivateRoute>
			<PrivateRoute exact path="/adminBarCrawl">
				<BarCrawlPage />
			</PrivateRoute>
			<PrivateRoute exact path="/adminBars">
				<Bars />
			</PrivateRoute>
		</Switch>
	);
};

export { ProtectedRoutes };
