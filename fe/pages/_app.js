import React from 'react'
import Head from 'next/head'
import 'antd/dist/antd.css'

const MyApp = (props) => {
  return (
    <>
      <Head>
        <title>CNA Playground</title>
      </Head>

      <props.Component></props.Component>
    </>
  )
}

export default MyApp
