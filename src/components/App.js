import React from 'react'
import styled from 'styled-components'
import { GlobalStyled } from '../reset-style'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyled/>
        <Wrap>
          <Header/>
          <Body/>
          <Footer/>
        </Wrap>
      </div>
    )
  }
}

export default App