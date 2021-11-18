import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";

const rootReducer = combineReducers({
  index: (state = {}, { type, payload } = {}) => {
    switch (type) {
      case HYDRATE:
        return { ...state, ...payload };
      default:
        return { ...state };
    }
  },
  user,
  post,
});

export default rootReducer;
