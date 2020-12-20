import React from 'react'
import { Layout ,Menu} from 'antd';
import { menuItems } from './menuItems.js'
import { Link ,withRouter} from 'react-router-dom'
import {
  RightOutlined,
  LeftOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

class Mside extends React.Component {
  state = {
    collapsed: false,
    menuList: [],
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  setMenuList = (arr) => {
    return arr.map(({ path, name, icon, key, children }) => {
      if (children && children.length) {
        return (
          <SubMenu key={key} icon={icon} title={name}>
            {
              
              this.setMenuList(children)
            }
          </SubMenu>
        )
      } else {
        return <Menu.Item key={key} icon={icon}>
          <Link to={path}>{name}</Link>
        </Menu.Item>
      }
    })
  }
  componentWillMount() {
    const menuList = this.setMenuList(menuItems)
    this.setState({
      menuList
    })
  }
  render() {
    const path = this.props.history.location.pathname
    return (
      <div id="Mside" style={{height: '100%'}}>
        <Sider className="my-side" style={{height: '100%'}} trigger={null} collapsible collapsed={this.state.collapsed}>
          {this.state.collapsed ? <RightOutlined onClick={this.toggleCollapsed} className="item-icon" /> : <LeftOutlined onClick={this.toggleCollapsed} className="item-icon" />}
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[path]}
          >
            {this.state.menuList}
          </Menu>
        </Sider>
      </div>
    )
  }
}

export default withRouter(Mside)