import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Color from './Colors'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Heading = styled.h1`
  text-align: center;
  font-family: Consolas, Menlo, monospace;
  font-size: 42px;
  font-weight: bolder;
  color: ${Color.Accent};
  max-width: 90vw;
`

const Text = styled.p`
  text-align: center;
  font-family: Consolas, Menlo, monospace;
  font-size: 16px;
  color: ${Color.Secondary};
  margin: 20px 0;
  max-width: 90vw;
`

const InviteButton = styled(Button)`
  font-size: 16px;
  padding: 15px;
  color: ${Color.Accent};
  border-color: ${Color.Accent};

  &:hover {
    color: white;
    background-color: ${Color.Primary};
    border-color: ${Color.Primary};
  }
`

class Body extends React.Component {
  render() {
    return (
      <Container>
        <Heading>A better way</Heading>
        <Heading>to enjoy every day.</Heading>
        <Text>Be the first to know when we launch.</Text>
        <InviteButton>Request an invite</InviteButton>
      </Container>
    )
  }
}

export default Body