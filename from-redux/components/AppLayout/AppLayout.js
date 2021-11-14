import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { useSelector } from 'react-redux'
import styles from './AppLayout.module.css'

import Header from '../header/Header'
import LoginForm from '../LoginForm/LoginForm'
import UserProfile from '../UserProfile/UserProfile'
import { useDispatch } from 'react-redux'

import { actionIncrement } from '../../store/module/counter'
import { actionDecrement } from '../../store/module/counter'

const AppLayout = (props) => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  const [dummyUserData, setDummyUserData] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onUserData = (user) => {
    setIsLoggedIn(user.isLoggedIn)
    setDummyUserData(user.user)
  }

  const onIncrement = (e) => {
    e.preventDefault()
    console.log('work inc')
    dispatch(actionIncrement())
  }

  const onDecrement = (e) => {
    e.preventDefault()
    console.log('work dec')
    dispatch(actionDecrement())
  }

  return (
    <>
      <Header title={props.children}></Header>
      <Row gutter={{ xs: 8, md: 24, lg: 32 }}>
        <Col span={6}>
          <sider className={styles.sider}>
            {isLoggedIn ? (
              <UserProfile user={dummyUserData}></UserProfile>
            ) : (
              <LoginForm onUserData={onUserData}></LoginForm>
            )}
          </sider>
        </Col>
        <Col span={18}>
          <section className={styles.container}>posts & notics are here!</section>
        </Col>
      </Row>
      <div>
        redux test counter
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>DECREMENT</button>
        <div>count : {count}</div>
      </div>
    </>
  )
}

AppLayout.proptypes = {
  props: PropTypes.string,
}
export default AppLayout
