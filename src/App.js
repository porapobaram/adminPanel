import React, { useEffect } from 'react';
import { func } from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { setUserData } from './reduxStore/authentication/actions';
import { connect } from 'react-redux';
import { PublicRoutes } from './routes/publicRoutes';
import { ProtectedRoutes } from './routes/ProtectedRoutes';

const propTypes = {
	setUserData: func,
};

// eslint-disable-next-line no-shadow
function App({ setUserData }) {
	const useSetToken = someFetchActionCreator => {
		useEffect(() => {
			someFetchActionCreator();
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
			</ul>
			<Switch>
				<Route path="/auth" component={PublicRoutes} />
				<Route path="/" component={ProtectedRoutes} />
			</Switch>
		</Router>
	);
}

App.propTypes = propTypes;

const mapDispatchToProps = {
	setUserData,
};

export default connect(null, mapDispatchToProps)(App);
