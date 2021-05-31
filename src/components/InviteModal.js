import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Modal from './Modal'
import Input from './Input'
import Button from './Button'
import Color from './Colors'

const SendButton = styled(Button)`
  margin-top: 35px;
  border: 2px solid ${Color.Accent};
  width: 27vw;
  max-width: 315px;
  min-width: 250px;
  height: 35px;
  padding: 5px;
  font-weight: bolder;

  &.disable {
    border-color: #cccccc;
    color: #cccccc;

    &:hover {
      border-color: #cccccc;
      background-color: white;
      color: #cccccc;
    }
  }

  @media screen and ( max-height: 400px ) {
    margin-top: 15px;
  }
`

const ErrorMessage = styled.p`
  visibility: ${props => props.visible ? 'hidden' : 'visible'};
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 13px;
  font-family: Consolas, Menlo, monospace;
  font-weight: bolder;
  font-style: italic;
  color: ${Color.Accent};
`

class InviteModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fullName: '',
      email: '',
      confirmEmail: '',

      fullNameValid: true,
      emailValid: true,
      confirmEmailValid: true,

      sendButtonDisabled: false,

      errorMessage: 'Error message from server',
      errorDisabled: true
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSend = this.handleSend.bind(this)
  }

  handleFocus(e) {
    this.setState({
      [e.target.name + 'Valid']: true,
      errorDisabled: true
    })
    // Specially, when email field is focused, 
    // clear confirm email field validity highlight as well.
    // This is because maybe user only wants to alternate email field.
    if (e.target.name == 'email') {
      this.setState({
        confirmEmailValid: true
      })
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSend() {
    // Trim three input field before making validations
    this.setState(
      Object.assign(this.state, {
        fullName: this.state.fullName.trim(),
        email: this.state.email.trim(),
        confirmEmail: this.state.confirmEmail.trim(),
        errorDisabled: true
      })
    )
    if (this.state.fullName.length < 4) {
      this.setState(
        Object.assign(this.state, {
          fullNameValid: false
        })
      )
    }
    const emailRegex = new RegExp(/^([a-zA-Z0-9])+([._-]([a-zA-Z0-9])+)*@([a-zA-Z0-9-])+((\.[a-zA-Z0-9]{2,3}){1,2})$/)
    if (this.state.email=== '' || !emailRegex.test(this.state.email)) {
      this.setState(
        Object.assign(this.state, {
          emailValid: false
        })
      )
    }
    if (this.state.confirmEmail === '' || this.state.confirmEmail !== this.state.email) {
      this.setState(
        Object.assign(this.state, {
          confirmEmailValid: false
        })
      )
    }
    if (this.state.fullNameValid && this.state.emailValid && this.state.confirmEmailValid) {
      this.setState({
        sendButtonDisabled: true
      })
      axios({
        url: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
        data: {
          name: this.state.fullName,
          email: this.state.email
        },
        method:'post'
      }).then(
        res => {
          this.setState({
            sendButtonDisabled: false
          })
          this.props.dismissModal()
          this.props.showSuccessModal()
        }
      ).catch(
        err => {
          this.setState({
            sendButtonDisabled: false,
            errorMessage: err.response.data.errorMessage,
            errorDisabled: false
          })
        }
      )
    }
  }

  render() {
    return (
      <Modal visible={this.props.visible}
             dismissModal={this.props.dismissModal}
             title='Request an invite'>
        <Input name='fullName'
               className={this.state.fullNameValid ? null : 'error'}
               value={this.state.fullName}
               onChange={(this.handleChange)}
               onFocus={this.handleFocus}
               placeholder='Full name' />
        <Input name='email'
               className={this.state.emailValid ? null : 'error'}
               value={this.state.email}
               onChange={this.handleChange}
               onFocus={this.handleFocus}
               placeholder='Email' />
        <Input name='confirmEmail'
               className={this.state.confirmEmailValid ? null : 'error'}
               value={this.state.confirmEmail}
               onChange={this.handleChange}
               onFocus={this.handleFocus}
               placeholder='Confirm Email' />
        <SendButton onClick={this.handleSend}
                    className={this.state.sendButtonDisabled ? 'disable' : null}
                    disabled={this.state.sendButtonDisabled}>
          {this.state.sendButtonDisabled ? 'Sending, please wait...' : 'Send'}
        </SendButton>
        <ErrorMessage visible={this.state.errorDisabled}>
          {this.state.errorMessage}
        </ErrorMessage>
      </Modal>
    )
  }
}

export default InviteModal