import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

import counter from './counter'

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...action.payload }
      default:
        return { ...state }
    }
  },
  counter,
})

// const rootReducer = (state = {}, action) => {
//   switch (action.type) {
//     case HYDRATE:
//       return {
//         ...action.payload,
//       }
//     default: {
//       const combineReducer = combineReducers({
//         counter,
//       })
//       return combineReducer(state, action)
//     }
//   }
// }

export default rootReducer
