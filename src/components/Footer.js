import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 12vh;
  width: 100%;
  border-top: 2px solid black;
`

const Text = styled.p`
  font-family: Consolas, Menlo, monospace;
  font-style: italic;
  font-size: smaller;
  margin: 2px;
`

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Text>Made with ♥ in Melbourne.</Text>
        <Text>© 2016 Broccoli &amp; Co. All rights reserved.</Text>
      </Container>
    )
  }
}

export default Footer