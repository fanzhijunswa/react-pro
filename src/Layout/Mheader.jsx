import React from 'react'
import { Layout } from 'antd';

const { Header } = Layout;

export default class Mheader extends React.Component {
  render() {
    return (
      <div id="Mheader" style={{height: '64px'}}>
        <Header className="site-layout-background" style={{ padding: 0 }}></Header>
      </div>
    )
  }
}