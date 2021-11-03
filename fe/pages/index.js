import useSelection from 'antd/lib/table/hooks/useSelection'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AppLayout from '../components/appLayout/appLayout'

// const Container = styled('div.profile')`
//   position : absolute
//   left : 0;
//   right : 0;
//   margin : 0 auto;
//   background-color: rgba(0, 0, 0, 0.1);
// `

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const count = useSelector((state) => {
    return state.counter.count
  })
  console.log(count)

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
      <AppLayout user={dummyUser} isLoggedIn={isLoggedIn}>
        <h1>Home</h1>
      </AppLayout>
    </>
  )
}

export default Home
