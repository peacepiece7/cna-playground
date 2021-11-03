import React from 'react'
import Head from 'next/head'
import 'antd/dist/antd.css'

import wrapper from '../store/configureStore'

const MyApp = ({ Component }) => {
  return (
    <>
      <Head>
        <title>CNA Playground</title>
      </Head>
      <Component></Component>
    </>
  )
}

export default wrapper.withRedux(MyApp)
