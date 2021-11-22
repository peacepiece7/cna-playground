import React from "react";
import PropTypes from "prop-types";

const Video = ({ video }) => {
  console.log("VIDEO COMPONENET");
  return <h1>{video.title}</h1>;
};

Video.propTypes = {
  // eslint-disable-next-line react/require-default-props
  video: PropTypes.object,
};
export default Video;
