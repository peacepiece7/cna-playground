import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";

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
});

export default rootReducer;
