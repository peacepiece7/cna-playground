import { put, takeLatest, delay, all, fork } from "redux-saga/effects";
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
} from "../store/module/user";

function* fetchLogIn(action) {
  try {
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({ type: LOG_IN_FAILURE, error: err.response.data });
  }
}

function* fetchLogOut(action) {
  try {
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, fetchLogIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, fetchLogOut);
}

function* MySaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}

export default MySaga;
