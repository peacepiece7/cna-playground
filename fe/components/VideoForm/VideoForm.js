import React from "react";
import { useSelector } from "react-redux";

import styles from "./VideoForm.module.css";

import Video from "../Video/Video";

const VideoForm = () => {
  // api -> request -> success -> data fetch 중, request일 때 데이터를 불러오는 문제..
  const { MainVideos } = useSelector((state) => state.videos);
  const { me } = useSelector((state) => state.users);
  return (
    <div className={styles.container}>
      {MainVideos && me ? (
        MainVideos.map((v) => {
          return <Video video={v} />;
        })
      ) : (
        <div>no data</div>
      )}
    </div>
  );
};

export default VideoForm;
