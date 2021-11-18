import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";

import Head from "next/head";
// meta , title
import wrapper from "../store/index";

const MyApp = ({ Component }) => {
  return (
    <>
      <Head>
        <title>CNA PLAYGROUND</title>
        <meta lang="kor" charSet="utf-8" />
      </Head>
      <Component />
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default wrapper.withRedux(MyApp);
