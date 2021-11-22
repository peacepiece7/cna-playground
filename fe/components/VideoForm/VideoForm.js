import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./VideoForm.module.css";

import Video from "../Video/Video";

const VideoForm = () => {
  const { MainVideos } = useSelector((state) => state.videos);
  const [videos, setVideos] = useState({});
  useEffect(() => {
    setVideos((prev) => {
      return { ...prev, ...MainVideos };
    });
  }, [MainVideos]);
  console.log("video componenet props are : ", videos);
  return (
    <div className={styles.container}>
      {false &&
        videos.map((v) => {
          return <Video video={v} />;
        })}
    </div>
  );
};

export default VideoForm;
