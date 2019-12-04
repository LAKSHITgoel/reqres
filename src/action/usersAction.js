import * as types from "../constants";

export const getAllUsers = page => ({
  type: types.GET_ALL_USERS,
  payload: {
    page
  }
});

export const getUser = id => ({
  type: types.GET_USER,
  payload: {
    id
  }
});

export const createUser = data => ({
  type: types.CREATE_USER,
  payload: {
    ...data
  }
});

export const updateUser = data => ({
  type: types.UPDATE_USER,
  payload: {
    ...data
  }
});

export const deleteUser = id => ({
  type: types.DELETE_USER,
  payload: {
    id
  }
});
