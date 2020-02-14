import * as actionTypes from './actionTypes';

const initialState = {
	barCrawlFeed: [],
};

export function barCrawlReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.GET_ALL_BARCRAWLS_SUCCESS:
			return {
				...state,
				barCrawlFeed: action.payload,
			};
		default:
			return state;
	}
}
