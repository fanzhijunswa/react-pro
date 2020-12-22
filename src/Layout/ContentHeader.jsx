import React from 'react'
import './ContentHeader.less'
import { withRouter } from 'react-router-dom'
import { menuItems } from './menuItems'

class ContentHeader extends React.Component {
  state = {
    name: '',
    time: ''
  }
  constructor(props, state) {
    super(props, state)
  }

  componentDidUpdate () {
    this.doGetRouteName(menuItems)
  }

  doGetRouteName = (arr) => {
    arr.forEach(item => {
      if (item.children) {
        this.doGetRouteName(item.children)
      } else {
        if (this.props.location.pathname === item.path) {
          this.setState({name: item.name})
          return false
        }
      }
    })
  }

  initTime() {
    const myDate = new Date()
    const year = myDate.getFullYear()
    const month = (myDate.getMonth() + 1+ '').padStart(2,'0')
    const day = (myDate.getDate()+ '').padStart(2,'0')
    const hour = (myDate.getHours()+'').padStart(2,'0')
    const min = (myDate.getMinutes() + 1+'').padStart(2,'0')
    const sec = (myDate.getSeconds()+'').padStart(2,'0')
    const time = `${year}-${month}-${day} ${hour}:${min}:${sec}`
    this.setState({time})
  }
  shouldComponentUpdate(newProps,newState) {
    return newProps.location.pathname !== this.props.location.pathname ||
    newState.name !== this.state.name ||
    newState.time !== this.state.time
  }

  componentWillMount() {
    this.doGetRouteName(menuItems)
    this.initTime()
    window.setInterval(() => {
      this.initTime()
    },1000)
  }

  render() {
    return (
      <div id="content-header" className="clearfix">
        <div className="content-title">
          {
            this.state.name
          }</div>
        <div className="content-right">
          <span>时间</span>
        <span>{this.state.time}</span>
        </div>
      </div>
    )
  }
}

export default withRouter(ContentHeader)