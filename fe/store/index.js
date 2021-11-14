// wrapper & store
// before redux-next-wrapper@7
// refer to this site -> https://cotak.tistory.com/164

import { applyMiddleware, compose, createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'

// index.js counter.js
import reducer from './module/'

const configureStore = (content) => {
  console.log('store.js contents are', content)
  const middlewares = []

  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(reducer, enhancer)
  return store
}

const wrapper = createWrapper(configureStore, {
  debug: process.NODE_ENV === 'development' ? true : false,
})

export default wrapper
