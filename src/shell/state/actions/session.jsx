const authSuccess = user => ({
  type: "AUTH_SUCCESS",
  payload: user
});

const authFail = () => ({
  type: "AUTH_FAIL"
});

const setSnack = snackDet =>({
  type:"SET_SNACK",
  payload: snackDet
})

export { authSuccess, authFail, setSnack };
