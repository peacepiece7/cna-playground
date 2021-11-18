import { produce } from "immer";

export const initialState = {
  me: null,
  logInDone: false,
  logInLoading: false,
  logInError: null,
  logOutDone: false,
  logOutLoading: false,
  logOutError: null,
};

export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";

export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";

export const actionLogInRequest = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const actionLogOutRequest = (data) => {
  return {
    type: LOG_OUT_REQUEST,
    data,
  };
};

// immutation을 지켜주면서 객체를 함쳐줄 것
const user = (state = initialState, { type, data, error } = {}) =>
  // eslint-disable-next-line consistent-return
  produce(state, (draft) => {
    switch (type) {
      // LOGIN CASES
      case LOG_IN_REQUEST:
        draft.logInDone = false;
        draft.logInLoading = true;
        draft.logInError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.me = {
          id: data.id,
          nickname: data.nickname,
          password: data.password,
        };
        draft.logInLoading = false;
        draft.logInDone = true;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = error;
        break;
      // LOGOUT CASES
      case LOG_OUT_REQUEST:
        draft.logOutDone = false;
        draft.logOutLoading = true;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.me = null;
        draft.logOutDone = true;
        draft.logOutLoading = false;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = error;
        break;
      default:
        return draft;
    }
  });
export default user;
