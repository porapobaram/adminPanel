import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './ui/components/LoginPage';
import RegisterPage from './ui/components/RegisterPage';

function App() {
	return (
		<Router>
			<ul style={{ marginBottom: 50 }}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/login">login</Link>
				</li>
			</ul>
			<Switch>
				<Route exact path="/login">
					<LoginPage />
				</Route>
				<Route exact path="/register">
					<RegisterPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
