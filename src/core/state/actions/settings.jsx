const changePrimary = col => ({
  type: "CHANGE_PRIMARY",
  payload: col
});

const changeSecondary = col => ({
  type: "CHANGE_SECONDARY",
  payload: col
});

const changeThemeType = typ => ({
  type: "CHANGE_THEME_TYPE",
  payload: typ
});

const resetTheme = () => ({
  type: "RESET_THEME"
});

const changeSiteData = () => ({
  type: "CHANGE_SITE_DATA"
});

const openSetting = () => ({
  type: "OPEN_SETTINGS"
});

const closeSetting = () => ({
  type: "CLOSE_SETTINGS"
});

export {
  changePrimary,
  changeSecondary,
  changeThemeType,
  resetTheme,
  changeSiteData,
  openSetting,
  closeSetting
};
