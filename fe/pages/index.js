import React, { useState } from 'react'
import styled from 'styled-components'

import AppLayout from '../components/appLayout/appLayout'
import LoginForm from '../components/loginForm/loginForm'
import Profile from '../components/profile/profile'

const Container = styled.section`
  position: relative;
  display : flex;
  width: 100%;
  height : 100%:
  background-color : rgba(0,0,0,0.1);
`
// const Container = styled('div.profile')`
//   position : absolute
//   left : 0;
//   right : 0;
//   margin : 0 auto;
//   background-color: rgba(0, 0, 0, 0.1);
// `

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const dummyUser = {
    uid: 1,
    user: {
      name: 'john',
      age: 27,
      region: 'Busan, korea',
    },
  }

  return (
    <>
      <AppLayout></AppLayout>
      <Container>
        <div>
          <h1>home</h1>
          {isLoggedIn ? <Profile user={dummyUser}></Profile> : <LoginForm></LoginForm>}
        </div>
        <div></div>
        <div></div>
      </Container>
    </>
  )
}

export default Home
