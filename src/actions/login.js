import loginService from '../services/login';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export const LOGOUT_USER = 'LOGOUT_USER';

export const isLoggedIn = () => {
  return async (dispatch) => {
    const getUser = window.localStorage.getItem('loggedAppUser');
    if (getUser) {
      const loggedInUser = JSON.parse(getUser);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: loggedInUser.data,
      });
    }
  };
};

export const loginUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_USER_START,
    });
    try {
      const loggedInUser = await loginService.login(user);
      console.log(loggedInUser.data);

      localStorage.setItem('loggedAppUser', JSON.stringify(loggedInUser));
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: loggedInUser.data,
      });
      return loggedInUser;
    } catch (error) {
      dispatch({
        type: LOGIN_USER_FAIL,
        payload: error.message,
      });
    }
  };
};

export const logoutUser = () => {
  window.localStorage.removeItem('loggedAppUser');
  window.localStorage.clear();

  return {
    type: LOGOUT_USER,
  };
};
