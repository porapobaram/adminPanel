import { requestFactory } from '../helpers/requestFactory';

// every method returns promise
export const barCrawlApi = {
	getBarCrawlFeed(data) {
		const url = '/barCrawl/getBarCrawlFeed';
		const method = 'GET';

		return requestFactory(url, method, data);
	},
	editBarCrawl(data) {
		const url = '/barCrawl/editBarCrawl';
		const method = 'POST';

		return requestFactory(url, method, data);
	},
	saveBarCrawl(data) {
		const url = '/barCrawl/saveBarCrawl';
		const method = 'POST';

		return requestFactory(url, method, data);
	},
	deleteBarCrawl(data) {
		const url = '/barCrawl/deleteBarCrawl';
		const method = 'POST';

		return requestFactory(url, method, data);
	},
};
