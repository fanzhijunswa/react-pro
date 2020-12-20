import React from 'react'
import { Layout } from 'antd';
import Mside from './Mside'
import Mheader from './Mheader'
import Mcontent from './Mcontent'
import './index.less'

export default class MLayout extends React.Component {
  state = {
    collapsed: false,
    arrs: []
  };
  render() {
    return (
      <Layout>
        <Mside />
        <Layout className="site-layout">
          <Mheader />
          <Mcontent />
        </Layout>
      </Layout>
    )
  }
}