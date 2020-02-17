import fetch from 'isomorphic-fetch';
import { BASIC_API_URL } from '../../config';
import cookie from 'react-cookies';

const headers = () => {
	const token = cookie.load('token');
	if (!!token) {
		return {
			// 'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		};
	}
	return { 'Content-Type': 'application/json' };
};

const requestFactory = async (url, method, data) => {
	const apiUrl = BASIC_API_URL + url;

	try {
		const res = await fetch(apiUrl, {
			method,
			body: JSON.stringify(data),
			headers: headers(),
		});
		if (!res.ok) {
			throw new Error('Error!');
		}
		return res.json();
	} catch (err) {
		throw new Error(err);
	}
};

export { requestFactory };
