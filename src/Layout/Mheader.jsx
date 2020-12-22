import React from 'react'
import { Layout, Button,Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './Mheader.less'
import { withRouter } from 'react-router-dom';

const { Header } = Layout;
const { confirm } = Modal;
class Mheader extends React.Component {
  constructor(props,state) {
    super(props,state)
  }
  doLoginOut = () => {
    const that = this
    confirm({
      title: '是否退出?',
      icon: <ExclamationCircleOutlined />,
      content: '退出管理系统后,balabala',
      onOk() {
        that.props.history.push('/login')
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  render() {
    return (
      <div id="Mheader" style={{ height: '64px' }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="header clearfix">
            <div className="span-all">
              <Button type="link" size="small">帮助</Button>
              <Button type="link" size="small">个人中心</Button>
              <Button type="link" size="small" onClick={this.doLoginOut}>退出</Button>
            </div>
          </div>
        </Header>
      </div>
    )
  }
}
export default withRouter(Mheader)