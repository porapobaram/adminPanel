import { requestFactory } from '../helpers/requestFactory';

// every method returns promise
export const authApi = {
	register(data) {
		const url = '/admin/registerUser';
		const method = 'POST';

		return requestFactory(url, method, data);
	},
	login(data) {
		const url = '/admin/loginUser';
		const method = 'POST';

		return requestFactory(url, method, data);
	}
};
