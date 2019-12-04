import * as types from "../constants";
import { takeLatest, put, call } from "redux-saga/effects";
import Axios from "../index";

async function loginAPI(action) {
  const {
    payload: { email, password }
  } = action;
  let res = await Axios.post("/login", {
    email,
    password
  });
  return res.data;
}

function* loginAction(action) {
  let { token } = yield call(() => loginAPI(action));
  localStorage.setItem("token", token);
  yield put({
    type: types.SET_AUTH_USER,
    payload: {
      token
    }
  });
}

export function* authSaga() {
  yield takeLatest(types.LOGIN, loginAction);
}
