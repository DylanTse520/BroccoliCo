import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import InviteModal from './InviteModal'
import SuccessModal from './SuccessModal'
import Color from '../components/Colors'

const Container = styled.div`
  flex: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
`

const Heading = styled.h1`
  max-width: 90vw;
  font-size: 42px;
  font-family: Consolas, Menlo, monospace;
  font-weight: bolder;
  text-align: center;
  color: ${Color.Accent};
`

const Text = styled.p`
  margin: 20px 0;
  max-width: 90vw;
  font-size: 16px;
  font-family: Consolas, Menlo, monospace;
  text-align: center;
  color: ${Color.Secondary};
`

const InviteButton = styled(Button)`
  padding: 15px;
  font-size: 16px;
`

class Body extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inviteModalVisible: false,
      successModalVisible: false
    }
    this.showInviteModal = this.showInviteModal.bind(this)
    this.showSuccessModal = this.showSuccessModal.bind(this)
    this.dismissInviteModal = this.dismissInviteModal.bind(this)
    this.dismissSuccessModal = this.dismissSuccessModal.bind(this)
  }

  showInviteModal() {
    this.setState({
      inviteModalVisible: true
    })
  }

  showSuccessModal() {
    this.setState({
      successModalVisible: true
    })
  }

  dismissInviteModal() {
    this.setState({
      inviteModalVisible: false
    })
  }

  dismissSuccessModal() {
    this.setState({
      successModalVisible: false
    })
  }

  render() {
    return (
      <Container>
        <Heading>A better way</Heading>
        <Heading>to enjoy every day.</Heading>
        <Text>Be the first to know when we launch.</Text>
        <InviteButton onClick={this.showInviteModal}>Request an invite</InviteButton>
        <InviteModal name='inviteModal'
                     visible={this.state.inviteModalVisible}
                     dismissModal={this.dismissInviteModal}
                     showSuccessModal={this.showSuccessModal} />
        <SuccessModal name='successModal'
                      visible={this.state.successModalVisible}
                      dismissModal={this.dismissSuccessModal} />
      </Container>
    )
  }
}

export default Body