import React from 'react'
import { Layout, Card,Button } from 'antd';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import {PlusOutlined} from '@ant-design/icons'
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
            <Card title="一级分类列表" extra={<Button type="primary" icon={<PlusOutlined />}>添加</Button>}>
              <Router>
                <Switch>
                  <Route path="/" exact component={Home}></Route>
                  <Route path="/goods" exact component={Goods}></Route>
                  <Route path="/goods/category" exact component={Category}></Route>
                  <Route path="/goods/menage" exact component={Menage}></Route>
                </Switch>
              </Router>
            </Card>
          </div>
        </Content>
      </div>
    )
  }
}