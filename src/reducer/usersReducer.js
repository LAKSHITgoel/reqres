import * as types from "../constants";

/*
user {
    id
    email
    first_name
    last_name
    avatar
}
*/

const initialState = {
  page: null,
  user: {},
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ALL_USERS:
      return {
        ...state,
        page: action.payload.users.page,
        users: action.payload.users.data,
        per_page: action.payload.users.per_page,
        total: action.payload.users.total,
        total_pages: action.payload.users.total_pages
      };

    case types.SET_USER:
      return {
        ...state,
        user: action.payload.user
      };
    default:
      return state;
  }
};
