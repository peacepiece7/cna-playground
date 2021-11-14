import { put, takeLatest, delay, all, fork } from 'redux-saga/effects'

const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
const LOG_IN_FAILURE = 'LOG_IN_FAILURE'
const LOG_IN_REQUEST = 'LOG_IN_REQUEST'

const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'

function* fetchLogIn(action) {
  try {
    yield delay(1000)
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    })
  } catch (err) {
    yield put({ type: LOG_IN_FAILURE, message: err.message, data: null })
  }
}

function* fetchLogOut() {
  try {
    yield delay(1000)
    yield put({
      type: LOG_OUT_SUCCESS,
    })
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      message: err.message,
    })
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, fetchLogIn)
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, fetchLogOut)
}

function* MySaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)])
}

export default MySaga
