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
const user = (state = initialState, { type, data, error } = {}) => {
  switch (type) {
    // LOGIN CASES
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInDone: false,
        logInLoading: true,
        logInError: null,
      };
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        me: {
          id: data.id,
          nickname: data.nickname,
          password: data.password,
        },
        logInLoading: false,
        logInDone: true,
      };
    }
    case LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInError: error,
      };
    // LOGOUT CASES
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutDone: false,
        logOutLoading: true,
        logOutError: null,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        me: null,
        logOutDone: true,
        logOutLoading: false,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logOutLoading: false,
        logOutError: error,
      };

    default:
      return {
        ...state,
      };
  }
};
export default user;
