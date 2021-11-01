import React from 'react'
import { Layout, Breadcrumb } from 'antd'

import 'antd/dist/antd.css'
import Navigator from './navigator'
import LoginForm from './loginForm'

const AppLayout = () => {
  return (
    <>
      <Layout className="header">
        <Layout.Header style={{ backgroundColor: 'white' }}>
          <Navigator></Navigator>
        </Layout.Header>
        <Layout>
          <Layout.Sider>
            <LoginForm></LoginForm>
          </Layout.Sider>
        </Layout>
        <Layout>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Profile</Breadcrumb.Item>
            <Breadcrumb.Item>Sign up</Breadcrumb.Item>
          </Breadcrumb>
          <Layout.Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  )
}

export default AppLayout
