import * as types from "../constants";

export const login = (email, password) => ({
  type: types.LOGIN,
  payload: {
    email,
    password
  }
});

export const logout = () => ({
  type: types.LOGOUT
});
