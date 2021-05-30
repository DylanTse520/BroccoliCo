import React from 'react'
import styled from 'styled-components'

const Mask = styled.div`
  opacity: ${props => props.opacity};
  visibility: ${props => props.visibility};
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #87878766;
  transition: 0.4s ease-in-out;
`

class Popup extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      opacity: 0,
      visibility: 'hidden'
    }
    this.dismissPopup = this.dismissPopup.bind(this)
  }

  componentDidMount(){
    this.props.onRef(this)
  }

  showPopup() {
    this.setState({
      opacity: 1,
      visibility: 'visible'
    })
  }

  dismissPopup() {
    this.setState({
      opacity: 0,
      visibility: 'hidden'
    })
  }

  render() {
    return (
      <Mask opacity={this.state.opacity} visibility={this.state.visibility} onClick={this.dismissPopup}/>
    )
  }
}

export default Popup