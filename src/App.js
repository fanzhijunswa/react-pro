import React from 'react'
import './App.less'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import MLayout from './Layout'
import NotFound from './pages/NotFound'

export default class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Router>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={MLayout}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}