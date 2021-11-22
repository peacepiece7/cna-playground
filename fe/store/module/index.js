import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import users from "./users";
import posts from "./posts";
import videos from "./videos";

const rootReducer = combineReducers({
  index: (state = {}, { type, payload } = {}) => {
    switch (type) {
      case HYDRATE:
        return { ...state, ...payload };
      default:
        return { ...state };
    }
  },
  users,
  posts,
  videos,
});

export default rootReducer;
