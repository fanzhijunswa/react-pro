import React from 'react'

export default class LoginHeader extends React.Component {
  render() {
    return (
      <div className="login-header">
        <h1>后台管理系统</h1>
        <div className="right-all">
          <div className="right-1 right-item">帮助</div>
          <div className="right-2 right-item">个人中心</div>
          <div className="right-3 right-item">退出</div>
        </div>
      </div>
    )
  }
} 