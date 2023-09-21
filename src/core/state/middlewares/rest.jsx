import eglfetch from "../../eglfetch";

const baseUrl = document === undefined ? "http://localhost:3000/api" : "/api";

const restService = () => next => action => {
  const result = next(action);
  if (!action.meta || !action.meta.async) {
    return result;
  }

  const { path, method = "GET", body } = action.meta;

  if (!path) {
    throw new Error(`'path' not specified for async action ${action.type}`);
  }

  const url = `${baseUrl}${path}`;

  return eglfetch(url, method, body).then(
    res => handleResponse(res, action, next),
    err => handleErrors(err, action, next)
  );
};

export default restService;

const handleErrors = (err, action, next) => {
  next({
    type: `${action.type}_FAILED`,
    payload: err,
    meta: action.meta
  });

  return Promise.reject(err);
};

const handleResponse = (res, action, next) => {
  next({
    type: `${action.type}_COMPLETED`,
    payload: res,
    meta: action.meta
  });

  return res;
};
