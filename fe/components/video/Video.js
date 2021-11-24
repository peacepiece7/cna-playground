import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "./Video.module.css";

const Video = ({ video }) => {
  const [splitedDescription, setSplitedDescription] = useState("");
  const [description, setDescription] = useState("");
  const [isClicked, setClicked] = useState(false);
  // video.snippet.thumbnails.default.url

  useEffect(() => {
    console.log("DEFAULT :", video.snippet.description);
    console.log("JSON STRINGITFY :", JSON.stringify(video.snippet.description));
    console.log(
      "PARSE :",
      JSON.parse(JSON.stringify(video.snippet.description.slice(0, 50)))
    );
    console.log("toString :", video.snippet.description.toString());
    setDescription(() => {
      return JSON.stringify(video.snippet.description).split("\\n").toString();
    });
  });

  const handleMoreBtn = useCallback(() => {
    setClicked((prev) => !prev);
  });

  const sp = JSON.stringify(video.snippet.description)
    .replace(/\\"/g, '"')
    .replace(/\\r/g, "")
    .split("\\n");

  return (
    <div>
      <h1>{video.snippet.title}</h1>
      <img src={video.snippet.thumbnails.medium.url} alt="no data" />
      <div className={styles.description}>
        {!isClicked &&
          sp.map((v, i) => {
            if (i === 0) {
              v = v.slice(1, v.length);
            }
            if (i === sp.length - 1) {
              v = v.slice(0, v.length - 1);
            }
            if (!v) {
              return <br />;
            }
            return <div>{v}</div>;
          })}
        <div>
          {isClicked && (
            <button type="button" onClick={handleMoreBtn}>
              더보기
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Video.propTypes = {
  // eslint-disable-next-line react/require-default-props
  video: PropTypes.object,
};
export default Video;
