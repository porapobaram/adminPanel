import { requestFactory } from '../helpers/requestFactory';

export const barApi = {
	getBars(data) {
		const url = '/bar/getAllBars';
		const method = 'GET';

        return requestFactory(url, method, data);
    }
};
