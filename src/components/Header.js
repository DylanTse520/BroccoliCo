import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 12vh;
  width: 100%;
  border-bottom: 2px solid black;
`

const Home = styled.a`
  text-decoration: none;
  font-family: Consolas, Menlo, monospace;
  font-size: 22px;
  font-weight: bolder;
  margin-left: 12vw;

  &:visited {
    color: black;
  }
 `

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Home href='/'>BROCCOLI &amp; CO.</Home>
      </Container>
    )
  }
}

export default Header