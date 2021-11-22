import { all, fork } from "redux-saga/effects";

import user from "./users";
import post from "./posts";
import video from "./videos";

function* MySaga() {
  yield all([fork(user), fork(post), fork(video)]);
}

export default MySaga;
