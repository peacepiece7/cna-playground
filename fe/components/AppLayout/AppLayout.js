import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { useSelector } from 'react-redux'
import styles from './AppLayout.module.css'

import LoginForm from '../LoginForm/LoginForm'
import UserProfile from '../UserProfile/UserProfile'
import { useDispatch } from 'react-redux'

import { actionLogInRequest } from '../../store/module/user'
import { actionLogOutRequest } from '../../store/module/user'

const AppLayout = () => {
  const dispatch = useDispatch()

  const isLoggedIn = useSelector((state) => {
    return state.user.isLoggedIn
  })

  const onUserLogIn = (me) => {
    dispatch(actionLogInRequest({ me }))
  }

  const onUserLogOut = () => {
    dispatch(actionLogOutRequest({}))
  }

  return (
    <>
      <Row gutter={{ xs: 8, md: 24, lg: 32 }}>
        <Col span={6}>
          <div className={styles.sider}>
            {isLoggedIn ? (
              <UserProfile onUserLogOut={onUserLogOut}></UserProfile>
            ) : (
              <LoginForm onUserLogIn={onUserLogIn}></LoginForm>
            )}
          </div>
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
