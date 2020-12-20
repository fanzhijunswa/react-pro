import {HomeOutlined,FileOutlined,EditOutlined,StarOutlined,SettingOutlined} from '@ant-design/icons';

export const menuItems =  [
  {
    path: '/',
    name: '首页',
    icon: <HomeOutlined />,
    key: '/'
  },{
    path: '/article',
    name: '文章管理',
    icon: <FileOutlined />,
    key: '/article',
    children: [
      {
        path: '/write',
        name: '写文章',
        icon: <EditOutlined />,
        key: '/write',
        children: [
          {
            path: '/test1',
            name: '测试1',
            icon: <EditOutlined />,
            key: '/test1',
          },{
            path: '/test2',
            name: '测试2',
            icon: <StarOutlined />,
            key: '/test2'
          }
        ]
      },{
        path: '/like',
        name: '收藏',
        icon: <StarOutlined />,
        key: '/like'
      }
    ]
  },{
    path: '/option',
    name: '选项',
    icon: <SettingOutlined />,
    key: '/option'
  },{
    path: '/movie',
    name: '电影',
    icon: <SettingOutlined />,
    key: '/movie'
  }
]