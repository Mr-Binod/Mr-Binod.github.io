import React from 'react'
import styled from "styled-components"

const Btnwrap = styled.div`
    width: 200px;
    height : 100px;
`

const Button = () => {
  return (
    <Btnwrap>
      <button>click me</button>
    </Btnwrap>
  )
}

export default Button
