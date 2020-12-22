import React from 'react'
import { Layout } from 'antd';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Goods from '../pages/Goods'
import Category from '../pages/Goods/components/Category'
import Menage from '../pages/Goods/components/Menage'
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
          <div className="content-bottom">
            <Router>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/goods" exact component={Goods}></Route>
                <Route path="/goods/category" exact component={Category}></Route>
                <Route path="/goods/menage" exact component={Menage}></Route>
              </Switch>
            </Router>
          </div>
        </Content>
      </div>
    )
  }
}