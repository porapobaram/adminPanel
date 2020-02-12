import { requestFactory } from '../helpers/requestFactory';

export const barApi = {
	getRandomBar() {
		const url = '/bar/getAllBars';
		const method = 'GET';

        return requestFactory(url, method);
    }
};
