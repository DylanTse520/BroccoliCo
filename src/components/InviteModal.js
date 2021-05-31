import React from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import Color from './Colors'

class InviteModal extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Modal visible={this.props.visible} dismissModal={this.props.dismissModal}/>
    )
  }
}

export default InviteModal