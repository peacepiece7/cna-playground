import React from 'react'
import Navigator from '../components/navigator'

const MyApp = (props) => {
  return (
    <>
      <Navigator></Navigator>
      <h1>My App</h1>
      <props.Component></props.Component>
    </>
  )
}

export default MyApp
