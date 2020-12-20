import React from 'react'
import LoginHeader from './login-header'
import LoginContent from './login-content'

export default class Login extends React.Component {
  render() {
    return (
      <div id="Login">
        <LoginHeader />
        <LoginContent />
      </div>
    )
  }
}