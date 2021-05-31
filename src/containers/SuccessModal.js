import React from 'react'
import styled from 'styled-components'
import Modal from '../components/Modal'
import Button from '../components/Button'
import Color from '../components/Colors'

const PromptMessage = styled.p`
  margin: 0px 25px 15px 25px;
  width: 27vw;
  max-width: 315px;
  min-width: 250px;
  font-size: 13px;
  font-family: Consolas, Menlo, monospace;
  text-align: center;
  color: ${Color.Primary};

  @media screen and ( max-width: 400px ) {
    margin: 0px 5px 15px 5px;
  }
`

const OkayButton = styled(Button)`
  margin-top: 40px;
  margin-bottom: 25px;
  border: 2px solid ${Color.Accent};
  width: 27vw;
  max-width: 315px;
  min-width: 250px;
  height: 35px;
  padding: 5px;
  font-weight: bolder;
`

class SuccessModal extends React.Component {
  constructor(props){
    super(props)
    this.handleOkay = this.handleOkay.bind(this)
  }

  handleOkay() {
    this.props.dismissModal()
  }

  render() {
    return (
      <Modal visible={this.props.visible}
             dismissModal={this.props.dismissModal}
             title='All done!'>
        <PromptMessage>You will be one of the first to experience Broccoli &amp; Co. when we launch.</PromptMessage>
        <OkayButton onClick={this.handleOkay}>OK</OkayButton>
      </Modal>
    )
  }
}

export default SuccessModal