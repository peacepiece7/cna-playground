const INCREMENT = 'INCREMENT'
const DECREMEMT = 'DECREMENT'

const initialState = {
  count: 0,
}

export const increseAction = (data) => {
  console.log(data)
  return {
    type: INCREMENT,
    data,
  }
}

export const decreseAction = (data) => {
  return {
    type: DECREMEMT,
    data,
  }
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log('action.data is ', action.data)
      return { ...state, count: action.data.count + 1 }
    case DECREMEMT:
      return { ...state, count: action.data.count - 1 }
    default:
      return { ...state }
  }
}

export default counter
