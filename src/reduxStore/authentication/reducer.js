import * as actionTypes from './actionTypes';

const initialState = {
	user: {},
};

export function authReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.AUTH_LOGIN_SUCCESS:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
}
