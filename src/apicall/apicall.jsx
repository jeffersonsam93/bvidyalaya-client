import axios from 'axios';

export const getHost = () => {
	if (localStorage.getItem('devserver') === '1') {
		return localStorage.getItem('devurl');
	}
	// if (process.env.NODE_ENV === "production") {
	//     return '/';
	// }
	const loc = window.location;
	const prot = loc.protocol;
	return prot + '//' + (process.env.NODE_ENV === 'production' ? loc.host : 'localhost:8080');
};

export default (url, method, body) => {
	const options = {
		method: method || 'GET',
		url: `${getHost()}/${url}`,
		//withCredentials: true,
		data: body,
	};

	//console.log(options);
	//axios.defaults.withCredentials = true;
	const res = axios(options);
	return parseStatus(res);
};

const parseStatus = (res) => {
	return new Promise((resolve, reject) => {
		res
			.then((response) => {
				const status = response.status;
				//console.log({ response, status });

				if (status) {
					if (status >= 200 && status < 300) {
						resolve(response.data);
					} else {
						reject(response.data);
					}
				} else {
					reject({ status: 500, response: response.message });
				}
			})
			.catch((reason) => {
				console.log(reason);
				return reject({ status: reason.status, response: reason.message });
			});
	});
};
