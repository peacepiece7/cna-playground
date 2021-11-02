import { HYDRATE } from 'next-redux-wrapper'
import { combinReducers } from 'redux'

// **
// * only redux
// * localStorage에 영속적인 저장
// * https://ko.redux.js.org/introduction/getting-started/
// **

// password is required that convert hash

// format을 이해하기 위해 Schema를 남겨둠
const intitialState = {
  id: 1,
  isLoggedIn: false,
  user: {
    uid: 'Admj21a',
    email: 'peacepiece7@naver.com',
    nickname: 'peacepiece',
    password: 'p@ssW0rd',
  },
  posts: {
    uploader: {
      uid: 'Admj21a',
      list: [
        {
          post: {
            data: '',
          },
        },
        {
          post: {
            data: '',
          },
        },
        {
          post: {
            data: '',
          },
        },
        {
          post: {
            data: '',
          },
        },
      ],
    },
  },
}
const user = (state = intitialState, action) => {
  switch (data.type) {
    case 'LOG_IN':
      return { ...state, isLoggedIn: true, user: action.user, posts: action.posts }
    default:
      return { ...state }
  }
}

const rootReducer = combinReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload }
    }
  },
  user,
})
