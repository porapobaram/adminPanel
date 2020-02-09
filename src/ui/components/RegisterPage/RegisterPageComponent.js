import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import { func } from 'prop-types';

const propTypes = {
	onSubmit: func,
};

const RegisterPageComponent = ({ onSubmit }) => {
	return (
		<div>
			<Form onSubmit={onSubmit} action="" method="POST">
				<Field name="name" component="input" type="text" placeholder="Name" />
				<Field name="email" component="input" type="email" placeholder="Email" />
				<Field name="password" component="input" type="password" placeholder="Password" />
				<button type="submit">Register</button>
			</Form>
		</div>
	);
};

RegisterPageComponent.propTypes = propTypes;

export default reduxForm({
	form: 'registration',
})(RegisterPageComponent);
