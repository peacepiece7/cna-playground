import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head";
import YouTube from "../service/youtube";
// meta , title
import wrapper from "../store/index";

const youtube = new YouTube(
  process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || process.env.YOUTUBE_API_KEY
);

// BE만들어서 CORS해결하고 써야 함..

const MyApp = ({ Component }) => {
  return (
    <>
      <Head>
        <title>CNA PLAYGROUND</title>
        <meta lang="kor" charSet="utf-8" />
      </Head>
      <Component youtube={youtube} />
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default wrapper.withRedux(MyApp);
