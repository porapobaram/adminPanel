import React from 'react';
import RegisterPageComponent from './RegisterPageComponent';
import { connect, useDispatch } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { string } from 'prop-types';
import { registerUser } from '../../../reduxStore/authentication/actions';

const propTypes = {
	name: string,
	email: string,
	password: string,
};

const RegisterPageContainer = ({ name, email, password }) => {
	const dispatch = useDispatch();
	const onSubmitHandler = e => {
		e.preventDefault();
		dispatch(registerUser({ name, email, password }));
	};

	return <RegisterPageComponent onSubmit={onSubmitHandler} />;
};

const selector = formValueSelector('registration');

RegisterPageContainer.propTypes = propTypes;

export default connect(state => {
	const name = selector(state, 'name');
	const email = selector(state, 'email');
	const password = selector(state, 'password');
	return {
		name,
		email,
		password,
	};
})(RegisterPageContainer);
