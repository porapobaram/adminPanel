import * as actionTypes from './actionTypes';
import { barCrawlApi } from '../../service/api/barCrawl';

export const getBarCrawlFeed = () => async dispatch => {
	dispatch({ type: actionTypes.GET_ALL_BARCRAWLS });

	try {
		const barCrawlFeed = await barCrawlApi.getBarCrawlFeed();
		dispatch({ type: actionTypes.GET_ALL_BARCRAWLS_SUCCESS, payload: barCrawlFeed });
	} catch (e) {
		dispatch({ type: actionTypes.GET_ALL_BARCRAWLS_ERROR });
	}
};
