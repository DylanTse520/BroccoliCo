import React from 'react'
import styled from 'styled-components'

const Mask = styled.div`
  opacity: ${props => props.display.opacity};
  visibility: ${props => props.display.visibility};
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #87878766;
  transition: 0.4s ease-in-out;
`

class Popup extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Mask display={this.props.display} onClick={this.props.dismissPopup}/>
    )
  }
}

export default Popup