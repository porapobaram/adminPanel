import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import { func } from 'prop-types';

const propTypes = {
	onSubmit: func,
};

const LoginPageComponent = ({ onSubmit }) => (
	<div>
		<Form onSubmit={onSubmit} action="" method="POST">
			<Field name="email" component="input" type="email" placeholder="Email" />
			<Field name="password" component="input" type="password" placeholder="Password" />
			<button type="submit">Login</button>
		</Form>
	</div>
);

LoginPageComponent.propTypes = propTypes;

export default reduxForm({
	form: 'login',
})(LoginPageComponent);
