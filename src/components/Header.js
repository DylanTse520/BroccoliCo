import React from 'react'
import styled from 'styled-components'
import Color from './Colors'
import broccoliIcon from '../resources/img/broccoli.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 12vh;
  width: 100%;
  border-bottom: 2px solid ${Color.Secondary};
`

const Icon = styled.img`
  width: 25px;
  margin-left: 11vw;
`

const Home = styled.a`
  text-decoration: none;
  font-family: Consolas, Menlo, monospace;
  font-size: 22px;
  font-weight: bolder;
  color: ${Color.Primary};
  margin-left: 10px;

  &:visited {
    color: ${Color.Primary};
  }
 `

class Header extends React.Component {
  render() {
    return (
      <Container>
        <a href='/'>
          <Icon src={broccoliIcon}/>
        </a>
        <Home href='/'>BROCCOLI &amp; CO.</Home>
      </Container>
    )
  }
}

export default Header