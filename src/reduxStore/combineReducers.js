import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './authentication/reducer';
import { barCrawlReducer } from './barCrawl/reducer';

export const rootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		form: formReducer,
		authReducer,
		barCrawlReducer,
	});
