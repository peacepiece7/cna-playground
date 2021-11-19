import { all, fork } from "redux-saga/effects";

import user from "./user";
import post from "./post";
import video from "./video";

function* MySaga() {
  yield all([fork(user), fork(post), fork(video)]);
}

export default MySaga;
