import { all, delay, put, takeLatest, fork } from "redux-saga/effects";
import {
  LOAD_VIDEO_FAILURE,
  LOAD_VIDEO_REQUEST,
  LOAD_VIDEO_SUCCESS,
} from "../store/module/video";

function* fetchLoadVideo(action) {
  try {
    yield delay(1000);
    yield put({
      type: LOAD_VIDEO_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_VIDEO_FAILURE,
    });
  }
}

function* watchLoadVideo() {
  yield takeLatest(LOAD_VIDEO_REQUEST, fetchLoadVideo);
}

function* video() {
  yield all([fork(watchLoadVideo)]);
}

export default video;
