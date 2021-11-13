import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import styles from './AppLayout.module.css'

import Header from '../header/Header'
import LoginForm from '../LoginForm/LoginForm'
import UserProfile from '../UserProfile/UserProfile'

const AppLayout = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <Header title={props.children}></Header>
      <Row gutter={{ xs: 8, md: 24, lg: 32 }}>
        <Col span={6}>
          <sider className={styles.sider}>{isLoggedIn ? <UserProfile></UserProfile> : <LoginForm></LoginForm>}</sider>
        </Col>
        <Col span={18}>
          <section className={styles.container}>posts & notics are here!</section>
        </Col>
      </Row>
    </>
  )
}

AppLayout.proptypes = {
  props: PropTypes.string,
}
export default AppLayout
