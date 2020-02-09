import React from 'react';
import LoginPageComponent from './LoginPageComponent';
import { connect, useDispatch } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { loginUser } from '../../../reduxStore/authentication/actions';
import { string } from 'prop-types';

const propTypes = {
	email: string,
	password: string,
};

const LoginPageContainer = ({ email, password }) => {
	const dispatch = useDispatch();
	const onLoginHandler = e => {
		e.preventDefault();
		dispatch(loginUser({ email, password }));
	};
	return <LoginPageComponent onSubmit={onLoginHandler} />;
};

const selector = formValueSelector('login');

LoginPageContainer.propTypes = propTypes;

export default connect(state => {
	const email = selector(state, 'email');
	const password = selector(state, 'password');
	return {
		email,
		password,
	};
})(LoginPageContainer);
