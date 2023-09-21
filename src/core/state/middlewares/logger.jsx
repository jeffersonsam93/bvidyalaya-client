const REGULAR = ["background: blue", "color: white"].join(";");

const SUCCESS = ["background: green", "color: white"].join(";");

const STARTED = ["background: darkorange", "color: white"].join(";");

const FAILURE = ["background: red", "color: white"].join(";");

const isIE = document.documentMode;

const createLogger = (active = true) => store => next => action => {
  if (!active) {
    return next(action);
  }
  const prevState = store.getState();
  const result = next(action);
  const nextState = store.getState();
  if (isIE) {
    logGroupCollapsed(`${action.type} `);
    logInfo("   prev state", prevState);
    logInfo("   action payload", action.payload);
    logInfo("   next state", nextState);
    logGroupEnd();
  } else {
    logGroupCollapsed(`%c ${action.type} `, determineStyle(action));
    logInfo("%cprev state", "color: darkorange", prevState);
    logInfo("%caction payload", "color: blue", action.payload);
    logInfo("%cnext state", "color: darkgreen", nextState);
    logGroupEnd();
  }
  return result;
};

export default createLogger;

function logGroupCollapsed(...args) {
  if (typeof console.groupCollapsed === "function") {
    console.groupCollapsed(...args);
  } else {
    console.log(...args);
  }
}

function logGroupEnd(...args) {
  if (typeof console.groupEnd === "function") {
    console.groupEnd(...args);
  } else {
    console.log(...args);
  }
}

function logInfo(...args) {
  if (console.info) {
    console.info(...args);
  }
}

function determineStyle(action) {
  if (!action.meta || !action.meta.async) {
    return REGULAR;
  }

  if (action.type.indexOf("_COMPLETED") > -1) {
    return SUCCESS;
  }

  if (action.type.indexOf("_FAILED") > -1) {
    return FAILURE;
  }

  return STARTED;
}
