// version 6로 고정
import { applyMiddleware, createStore, compose } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'

// import reducer from "../reducers"
import rootReducer from '../reducer/index'

const configureStore = (context) => {
  console.log('context', context)
  const middlewares = []

  // prettier-ignore
  const enhancer = process.env.NODE_ENV === 'production' 
  ? compose(applyMiddleware(...middlewares)) 
  : composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(rootReducer, enhancer)
  return store
}

const wrapper = createWrapper(configureStore, {
  debug: process.NODE_ENV === 'development',
  debug: true,
})

export default wrapper
