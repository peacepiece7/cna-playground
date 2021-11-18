import React from "react";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import styles from "./AppLayout.module.css";

import LoginForm from "../LoginForm/LoginForm";
import UserProfile from "../UserProfile/UserProfile";

const AppLayout = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <Row gutter={{ xs: 8, md: 24, lg: 32 }}>
      <Col span={6}>
        <div className={styles.sider}>
          {me ? <UserProfile /> : <LoginForm />}
        </div>
      </Col>
      <Col span={18}>
        <section className={styles.container}>posts & notics are here!</section>
      </Col>
    </Row>
  );
};

export default AppLayout;
