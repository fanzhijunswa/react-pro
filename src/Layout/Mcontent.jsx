import React from 'react'
import { Layout } from 'antd';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Movie from '../pages/Movie'
import Article from '../pages/Article'
import Home from '../pages/Home'
import ContentHeader from './ContentHeader'
import './Mcontent.less'
const { Content } = Layout;

export default class Mcontent extends React.Component {
  render() {
    return (
      <div id="Mcontent">
        <Content className="site-layout-background">
          <ContentHeader />
          <Router>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/movie" exact component={Movie}></Route>
              <Route path="/article" exact component={Article}></Route>
            </Switch>
          </Router>
        </Content>
      </div>
    )
  }
}