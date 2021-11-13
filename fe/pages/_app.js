import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'

const MyApp = ({ Component }) => {
  return <Component></Component>
}

MyApp.propTypes = {
  Component: PropTypes.func,
}

export default MyApp
