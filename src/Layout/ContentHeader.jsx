import React from 'react'
import './ContentHeader.less'

export default class ContentHeader extends React.Component {
  render() {
    return (
      <div id="content-header" classNam="clearfix">
        <div className="content-title">首页</div>
        <div className="content-right">时间</div>
      </div>
    )
  }
}