import React from 'react'
import { useSelector } from 'react-redux'
import { Form, Button } from 'antd'

const UserProfile = ({ onUserLogOut }) => {
  const nickname = useSelector((state) => state.user.me.nickname)
  return (
    <>
      <div>welcome {nickname}</div>
      <Form onFinish={onUserLogOut}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log out
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default UserProfile
