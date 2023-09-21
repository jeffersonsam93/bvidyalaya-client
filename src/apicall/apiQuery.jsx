import apicall from './apicall';

export default (type, params, method, body) => {
	const querString = [];
	for (const key in params) {
		if (params.hasOwnProperty(key)) {
			const element = params[key];
			querString.push(`${key}=${element}`);
		}
	}

	return apicall(
		`api/${type}${querString.length > 0 ? '?' : ''}${querString.join('&')}`,
		method,
		body
	);
};
