import * as types from "../constants";

const initialState = {
  isLoggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH_USER:
      return {
        isLoggedIn: true
      };

    case types.LOGOUT:
      return initialState;

    default:
      return state;
  }
};
