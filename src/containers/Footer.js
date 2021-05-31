import React from 'react'
import styled from 'styled-components'
import Color from '../components/Colors'

const Container = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  border-top: 2px solid ${Color.Secondary};
  width: 100%;
  height: 12vh;
`

const Text = styled.p`
  margin: 2px;
  font-size: smaller;
  font-family: Consolas, Menlo, monospace;
  font-style: italic;
  color: ${Color.Secondary};
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