import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { useSelector } from 'react-redux'
import styles from './AppLayout.module.css'

import Header from '../header/Header'
import LoginForm from '../LoginForm/LoginForm'
import UserProfile from '../UserProfile/UserProfile'
import { useDispatch } from 'react-redux'

import { actionLogIn } from '../../store/module/user'
import { actionLogOut } from '../../store/module/user'

const AppLayout = (props) => {
  const dispatch = useDispatch()

  const isLoggedIn = useSelector((state) => {
    return state.user.isLoggedIn
  })

  const onUserLogIn = (me) => {
    dispatch(actionLogIn({ me }))
  }

  const onUserLogOut = () => {
    dispatch(actionLogOut({}))
  }

  return (
    <>
      <Header title={props.children}></Header>
      <Row gutter={{ xs: 8, md: 24, lg: 32 }}>
        <Col span={6}>
          <sider className={styles.sider}>
            {isLoggedIn ? (
              <UserProfile onUserLogOut={onUserLogOut}></UserProfile>
            ) : (
              <LoginForm onUserLogIn={onUserLogIn}></LoginForm>
            )}
          </sider>
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
