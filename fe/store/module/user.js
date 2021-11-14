export const initialState = {
  isLoggedIn: false,
  me: {
    id: '',
    nickname: '',
    password: '',
  },
}

const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'
export const actionLogIn = (data) => {
  return {
    type: LOG_IN,
    data,
  }
}

export const actionLogOut = (data) => {
  return {
    type: LOG_OUT,
    data,
  }
}

// immutation을 지켜주면서 객체를 함쳐줄 것
const user = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      console.log('current tried to loggined user has this data like ...', action.data)
      const data = action.data.me
      return {
        ...state,
        me: {
          id: data.id,
          nickname: data.nickname,
          password: data.password,
        },
        isLoggedIn: true,
      }
    case LOG_OUT:
      console.log(state)
      return {
        ...state,
        id: '',
        nickname: '',
        password: '',
        isLoggedIn: false,
      }

    default:
      return {
        ...state,
      }
  }
}
export default user
