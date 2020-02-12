import * as actionTypes from './actionTypes';
import { authApi } from '../../service/api/auth';
import cookie from 'react-cookies';

export const registerUser = data => async dispatch => {
	dispatch({ type: actionTypes.AUTH_REGISTER_REQUEST });
	try {
		await authApi.register(data);
		dispatch({ type: actionTypes.AUTH_REGISTER_SUCCESS });
	} catch (e) {
		dispatch({ type: actionTypes.AUTH_REGISTER_ERROR });
		console.log(e);
	}
};

export const loginUser = data => async dispatch => {
	dispatch({ type: actionTypes.AUTH_LOGIN_REQUEST });
	try {
		const userData = await authApi.login(data);
		dispatch({ type: actionTypes.AUTH_LOGIN_SUCCESS, payload: userData });
		cookie.save('token', userData.token, { path: '/' });
		cookie.save('userEmail', userData.userEmail, { path: '/' });
	} catch (e) {
		dispatch({ type: actionTypes.AUTH_LOGIN_ERROR });
		console.log(e);
	}
};

export const setUserData = () => dispatch => {
	const userData = {
		userEmail: decodeURI(cookie.load('userEmail')),
		token: decodeURI(cookie.load('token')),
	};
	if (userData.userEmail !== 'undefined' || userData.token !== 'undefined') {
		dispatch({ type: actionTypes.AUTH_LOGIN_SUCCESS, payload: userData });
	}
};
