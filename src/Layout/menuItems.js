import { HomeOutlined, FileOutlined, EditOutlined, StarOutlined, SettingOutlined } from '@ant-design/icons';

export const menuItems = [
  {
    path: '/',
    name: '首页',
    icon: <HomeOutlined />,
    key: '/'
  }, {
    path: '/goods',
    name: '商品',
    icon: <FileOutlined />,
    key: '/goods',
    children: [
      {
        path: '/goods/category',
        name: '品类管理',
        icon: <EditOutlined />,
        key: '/goods/category',
      }, {
        path: '/goods/menage',
        name: '商品管理',
        icon: <StarOutlined />,
        key: '/goods/menage'
      }
    ]
  }, {
    path: '/option',
    name: '选项',
    icon: <SettingOutlined />,
    key: '/option'
  }, {
    path: '/movie',
    name: '电影',
    icon: <SettingOutlined />,
    key: '/movie'
  }
]