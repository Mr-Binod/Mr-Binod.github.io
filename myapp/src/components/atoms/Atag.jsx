import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    
`

const Atag = (link, children) => {
  return (
    <Wrap>
      <a href={link}>{children}</a>
    </Wrap>
  )
}

export default Atag
