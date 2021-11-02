import React from 'react'
import Head from 'next/head'
import 'antd/dist/antd.css'
import store from '../store/store'

const MyApp = (props) => {
  return (
    <>
      <Head>
        <title>CNA Playground</title>
      </Head>

      <props.Component store={store}></props.Component>
    </>
  )
}

export default MyApp
