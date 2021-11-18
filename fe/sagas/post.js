import { all, delay, put, takeLatest, fork } from "redux-saga/effects";
import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
} from "../store/module/post";

function* fetchAddPost(action) {
  try {
    yield delay(1000);
    yield put({
      type: ADD_POST_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, fetchAddPost);
}

function* post() {
  yield all([fork(watchAddPost)]);
}

export default post;
