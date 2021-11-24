import React from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import styles from "./AppLayout.module.css";

import LoginForm from "../LoginForm/LoginForm";
import UserProfile from "../UserProfile/UserProfile";
import VideoForm from "../VideoForm/VideoForm";

const AppLayout = () => {
  const { me } = useSelector((state) => state.users);
  const { loadVideoLoading } = useSelector((state) => state.videos);
  console.log("LOAD VIDEO LOADING :", loadVideoLoading);

  return (
    <Row gutter={{ xs: 8, md: 24, lg: 32 }}>
      <Col span={6}>
        <div className={styles.sider}>
          {me ? <UserProfile /> : <LoginForm />}
        </div>
      </Col>
      <Col span={18}>
        <section className={styles.container}>posts & notics are here!</section>
        {loadVideoLoading ? <div>로딩중..</div> : <VideoForm />}
      </Col>
    </Row>
  );
};

export default AppLayout;
