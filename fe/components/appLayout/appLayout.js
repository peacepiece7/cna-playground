import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Navigation from '../navigation/navigation'
import Profile from '../profile/profile'
import LoginForm from '../loginForm/loginForm'
import PostForm from '../postForm/postForm'

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`

const MainContent = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
`

const AppLayout = ({ user, isLoggedIn, children }) => {
  return (
    <>
      <Navigation></Navigation>
      <div>{children}</div>
      <Container>
        <div>{isLoggedIn ? <Profile user={user}></Profile> : <LoginForm></LoginForm>}</div>
        <MainContent>
          <PostForm></PostForm>
        </MainContent>
        <div>Finder</div>
      </Container>
    </>
  )
}

export default AppLayout
