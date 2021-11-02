import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Input } from 'antd'

const WrrapedInput = styled(Input.TextArea)`
  width: 80%;
  max-width: 550px;
  margin-top: 10px;
`

const Wrraper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const PostForm = ({}) => {
  //
  const handleChange = useCallback(() => {})

  return (
    <>
      <div>Post Form</div>
      <Wrraper>
        <WrrapedInput maxLength={100} showCount onChange={handleChange}></WrrapedInput>
      </Wrraper>
    </>
  )
}

export default PostForm
