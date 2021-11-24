import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import AppLayout from "../components/AppLayout/AppLayout";
import Header from "../components/Header/Header";

import { LOAD_VIDEO_REQUEST } from "../store/module/videos";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://youtube.googleapis.com/youtube/v3/videos", {
        params: {
          key:
            process.env.NEXT_PUBLIC_YOUTUBE_API_KEY ||
            process.env.YOUTUBE_API_KEY,
          part: "snippet",
          chart: "mostPopular",
          maxResults: 25,
        },
      })
      .then((res) => {
        console.log("RESPONSE DATA ", res.data.items);
        dispatch({ type: LOAD_VIDEO_REQUEST });
      });
    // CORS ERROR
    // const response = youtube.getLoading();
  }, []);
  return (
    <>
      <Header>Home</Header>
      <AppLayout />
    </>
  );
};

export default Home;
