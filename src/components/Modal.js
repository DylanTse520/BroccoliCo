import React from 'react'
import styled from 'styled-components'
import Color from './Colors'

const Mask = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  opacity: ${props => props.visible ? 1 : 0};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  transition: 0.4s ease-in-out;
  width: 100%;
  height: 100%;
  background-color: #87878766;
`

const Popup = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  opacity: ${props => props.visible ? 1 : 0};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  transition: 0.4s ease-in-out;
  border: 1px solid ${Color.Secondary};
  width: 30vw;
  height: 60vh;
  min-width: 300px;
  background-color: white;
`

class Modal extends React.Component {
  constructor(props){
    super(props)
    this.dismissModal = this.dismissModal.bind(this)
  }

  dismissModal(e) {
    if (e.target === e.currentTarget) {
      this.props.dismissModal()
    }
  }

  render() {
    return (
      <Mask visible={this.props.visible} onClick={this.dismissModal}>
        <Popup visible={this.props.visible}>
          {this.props.children}
        </Popup>
      </Mask>
    )
  }
}

export default Modal