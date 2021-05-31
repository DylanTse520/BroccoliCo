import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import InviteModal from './InviteModal'
import Color from './Colors'

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
  border-color: ${Color.Accent};
  padding: 15px;
  font-size: 16px;
  color: ${Color.Accent};

  &:hover {
    border-color: ${Color.Primary};
    background-color: ${Color.Primary};
    color: white;
  }
`

class Body extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inviteModalVisible: false
    }
    this.showModal = this.showModal.bind(this)
    this.dismissModal = this.dismissModal.bind(this)
  }

  showModal() {
    this.setState({
      inviteModalVisible: true
    })
  }

  dismissModal() {
    this.setState({
      inviteModalVisible: false
    })
  }

  render() {
    return (
      <Container>
        <Heading>A better way</Heading>
        <Heading>to enjoy every day.</Heading>
        <Text>Be the first to know when we launch.</Text>
        <InviteButton onClick={this.showModal}>Request an invite</InviteButton>
        <InviteModal visible={this.state.inviteModalVisible} dismissModal={this.dismissModal}/>
      </Container>
    )
  }
}

export default Body