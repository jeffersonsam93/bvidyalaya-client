export default (url, method, body) => {
  const options = {
    method,
    headers: defaultHeaders(),
    body: method !== "GET" ? JSON.stringify(body) : null
  };

  return fetch(url, options).then(res => parseStatus(res.status, res.json()));
};

const parseStatus = (status, res) => {
  return new Promise((resolve, reject) => {
    if (status >= 200 && status < 300) {
      res.then(response => resolve(response));
    } else {
      res.then(response => reject({ status, response }));
    }
  });
};

const defaultHeaders = () => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
};
