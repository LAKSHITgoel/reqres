import * as types from "../constants";
import { takeLatest, put, call } from "redux-saga/effects";
import Axios from "../index";
import { notification } from "antd";
import { store } from "../App";

function throwException(exp) {
  notification.error({
    message: "Error Occured",
    description: exp
  });
}

function successNotify(msg, desc) {
  notification.success({
    message: msg,
    description: desc
  });
}

function errorNotify(msg, desc) {
  notification.error({
    message: msg,
    description: desc
  });
}

async function getAllUsers(payload) {
  const { page } = payload;
  try {
    let res = await Axios.get(`/users?page=${page}`);
    if (res.status === 200) {
      return res;
    } else {
      errorNotify("Error Occured", res.satus);
    }
  } catch (exp) {
    throwException(exp);
  }
}

function* getAllUsersAction(action) {
  let { page, data, total_pages, total, per_page } = yield call(
    getAllUsers,
    action.payload
  );
  yield put({
    type: types.SET_ALL_USERS,
    payload: {
      page,
      users: data,
      total_pages,
      total,
      per_page
    }
  });
}

async function getUser(payload) {
  const { id } = payload;
  try {
    let res = await Axios.get(`/users/${id}`);
    if (res.status === 200) {
      return res.data;
    } else {
      errorNotify("Error Occured", res.status);
    }
  } catch (exp) {
    throwException(exp);
  }
}

function* getUserAction(action) {
  let data = yield call(getUser, action.payload);
  yield put({
    type: types.SET_USER,
    payload: {
      user: data
    }
  });
}

async function createUser(payload) {
  try {
    const { first_name, last_name, email } = payload;
    let res = await Axios.post("/users", {
      first_name,
      last_name,
      email
    });
    if (res.status === 201) {
      successNotify("User Created", JSON.stringify(res.data));
      return true;
    } else {
      errorNotify("Error Occured", res.satus);
      return false;
    }
  } catch (exp) {
    throwException(exp);
  }
}

function* createUserAction(action) {
  let data = yield call(createUser, action.payload);
  if (data) {
    let { page } = store.getState().users;
    yield put({
      type: types.GET_ALL_USERS,
      payload: {
        page
      }
    });
  }
}

async function updateUser(payload) {
  const { id, first_name, last_name, email } = payload;
  try {
    let res = await Axios.put(`/users/${id}`, {
      first_name,
      last_name,
      email
    });
    if (res.status === 200) {
      successNotify("User Updated", JSON.stringify(res.data));
      return true;
    } else {
      errorNotify("Error Occured", res.status);
      return false;
    }
  } catch (exp) {
    throwException(exp);
  }
}

function* updateUserAction(action) {
  let data = yield call(updateUser, action.payload);
  if (data) {
    let { page } = store.getState().users;
    yield put({
      type: types.GET_ALL_USERS,
      payload: {
        page
      }
    });
  }
}

async function deleteUser(payload) {
  try {
    const { id } = payload;
    let res = await Axios.delete(`/users/${id}`);
    if (res.status === 204) {
      successNotify("User Deleted");
    } else {
      errorNotify("Error Occured", res.satus);
    }
    return true;
  } catch (exp) {
    throwException(exp);
  }
}

function* deleteUserAction(action) {
  let data = yield call(deleteUser, action.payload);
  if (data) {
    let { page } = store.getState().users;
    yield put({
      type: types.GET_ALL_USERS,
      payload: {
        page
      }
    });
  }
}

export function* usersSaga() {
  yield takeLatest(types.GET_ALL_USERS, getAllUsersAction);
  yield takeLatest(types.GET_USER, getUserAction);
  yield takeLatest(types.UPDATE_USER, updateUserAction);
  yield takeLatest(types.CREATE_USER, createUserAction);
  yield takeLatest(types.DELETE_USER, deleteUserAction);
}
