const setting = (state = { siteData: false }, action = {}) => {
  switch (action.type) {
    case "CHANGE_PRIMARY":
      return {
        ...state,
        primaryColor: action.payload
      };
    case "CHANGE_SECONDARY":
      return {
        ...state,
        secondaryColor: action.payload
      };
    case "CHANGE_THEME_TYPE":
      return {
        ...state,
        themeType: action.payload
      };
    case "RESET_THEME": {
      const nState = {
        ...state
      };
      delete nState["themeType"];
      delete nState["primaryColor"];
      delete nState["secondaryColor"];

      return nState;
    }
    case "CHANGE_SITE_DATA":
      return {
        ...state,
        siteData: !state.siteData
      };
    case "OPEN_SETTINGS":
      return {
        ...state,
        openSetting: true
      };
    case "CLOSE_SETTINGS":
      return {
        ...state,
        openSetting: false
      };
    default:
      return state;
  }
};

export { setting };
