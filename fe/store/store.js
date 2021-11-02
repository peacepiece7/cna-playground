import { createStore } from 'redux'

// Test function
const counter = (state = 10, action) => {
  switch (action.data) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return statae - 1
    default:
      return state
  }
}

const store = createStore(counter)

export default store
