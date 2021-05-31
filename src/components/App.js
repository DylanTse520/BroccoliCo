import React from 'react'
import styled from 'styled-components'
import { GlobalStyled } from '../resetStyle'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const Wrap = styled.div`
  flex-direction: column;
  display: flex;
  height: 100vh;
`

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyled />
        <Wrap>
          <Header />
          <Body />
          <Footer />
        </Wrap>
      </div>
    )
  }
}

export default App