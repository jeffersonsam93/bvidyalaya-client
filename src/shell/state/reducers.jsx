const initialState = {
  user: null,
  snackBarDet: {},
};

const login = (state = initialState, action = {}) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        user: action.payload
      };
    case "AUTH_FAIL":
      return {
        ...state,
        user: null
      };
    case "SET_SNACK":
      return {
        ...state,
        snackBarDet: action.payload
      };
    default:
      return state;
  }
};

const shell = (state = { navOpen: false }, action = {}) => {
  switch (action.type) {
    case "TOGGLE_NAV":
      return {
        ...state,
        navOpen: !!!state.navOpen
      };
    case "TEMP":
      return state;
    default:
      return state;
  }
};

export { login, shell };
