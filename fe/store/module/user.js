export const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  me: {
    id: '',
    nickname: '',
    password: '',
  },
}

const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
const LOG_IN_FAILURE = 'LOG_IN_FAILURE'
const LOG_IN_REQUEST = 'LOG_IN_REQUEST'

const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'

export const actionLogInRequest = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  }
}

export const actionLogOutRequest = (data) => {
  return {
    type: LOG_OUT_REQUEST,
    data,
  }
}

// immutation을 지켜주면서 객체를 함쳐줄 것
const user = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      console.log('REDUCER LOG IN REQUEST')
      return {
        ...state,
        isLoggingIn: true,
      }
    case LOG_IN_SUCCESS:
      const data = action.data.me
      console.log('REDUCER LOG IN SUCCESS')
      console.log(data)
      return {
        ...state,
        me: {
          id: data.id,
          nickname: data.nickname,
          password: data.password,
        },
        isLoggedIn: true,
        isLoggingIn: false,
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
      }
    case LOG_OUT_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
      }
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        id: '',
        nickname: '',
        password: '',
        isLoggedIn: false,
        isLoggingIn: false,
      }
    case LOG_OUT_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
      }

    default:
      return {
        ...state,
      }
  }
}
export default user
