import React from 'react'
import styled from 'styled-components'
import Color from './Colors'
import broccoliIcon from '../resources/img/broccoli.png'

const Container = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
  border-bottom: 2px solid ${Color.Secondary};
  width: 100%;
  height: 12vh;
`

const Icon = styled.img`
  margin-left: 11vw;
  width: 25px;
`

const Home = styled.a`
  margin-left: 10px;
  text-decoration: none;
  font-size: 22px;
  font-family: Consolas, Menlo, monospace;
  font-weight: bolder;
  color: ${Color.Primary};

  &:visited {
    color: ${Color.Primary};
  }
 `

class Header extends React.Component {
  render() {
    return (
      <Container>
        <a href='/'>
          <Icon src={broccoliIcon} />
        </a>
        <Home href='/'>BROCCOLI &amp; CO.</Home>
      </Container>
    )
  }
}

export default Header