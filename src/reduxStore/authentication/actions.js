import * as actionTypes from './actionTypes';
import { authApi } from '../../service/api/auth';

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
		await authApi.login(data);
		dispatch({ type: actionTypes.AUTH_LOGIN_SUCCESS });
	} catch (e) {
		dispatch({ type: actionTypes.AUTH_LOGIN_ERROR });
		console.log(e);
	}
};
