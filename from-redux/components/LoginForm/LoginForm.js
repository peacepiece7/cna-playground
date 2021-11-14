import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import PropTypes from 'prop-types'

import styles from './LoginForm.module.css'

const LoginForm = ({ onUserData }) => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const onFinish = () => {
    onUserData({
      isLoggedIn: true,
      user: {
        nickname: username,
        password: password,
      },
    })
  }

  // Will be dispatched user data

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const onChangeValue = (e) => {
    if (e.target.id === 'basic_username') {
      setUsername(e.target.value)
    }
    if (e.target.id === 'basic_password') {
      setPassword(e.target.value)
    }
  }

  return (
    <Form
      className={styles.form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        onChange={onChangeValue}
        label="Username"
        name="username"
        rules={[
          {
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        onChange={onChangeValue}
        label="Password"
        name="password"
        rules={[
          {
            message: 'Please input your password',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

LoginForm.propTypes = {
  onUserData: PropTypes.func,
}

export default LoginForm
