import React, { useEffect } from 'react';
import { func } from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { setUserData } from './reduxStore/authentication/actions';
import { useDispatch } from 'react-redux';
import { PublicRoutes } from './routes/publicRoutes';
import { ProtectedRoutes } from './routes/ProtectedRoutes';

const propTypes = {
	setUserData: func,
};

// eslint-disable-next-line no-shadow
function App() {
	const dispatch = useDispatch();

	const useSetToken = someFetchActionCreator => {
		useEffect(() => {
			dispatch(someFetchActionCreator());
		}, [someFetchActionCreator]);
	};

	useSetToken(setUserData);

	return (
		<Router>
			<ul style={{ marginBottom: 50 }}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/auth/login">login</Link>
				</li>
				<li>
					<Link to="/auth/register">register</Link>
				</li>
				<li>
					<Link to="/adminBarCrawl">Bar Crawl page</Link>
				</li>
				<li>
					<Link to="/adminBars">Bars page</Link>
				</li>
			</ul>
			<Switch>
				<Route path="/auth" component={PublicRoutes} />
				<Route path="/" component={ProtectedRoutes} />
			</Switch>
		</Router>
	);
}

App.propTypes = propTypes;

export default App;
