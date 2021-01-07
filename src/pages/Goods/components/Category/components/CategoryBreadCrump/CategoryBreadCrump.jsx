import React from 'react'
import { Breadcrumb, Button, Modal, Form, Input, } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './CategoryBreadCrump.less'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
export default class CategoryBreadCrump extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false
    }
  }
  showModal = () => {
  };

  handleOk = () => {
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false })
  };

  onFinish = (values: any) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }

  render() {
    return (
      <div id="CategoryBreadCrump">
        <div className="left">
          <Breadcrumb separator=">">
            {
              this.props.categoryBarList.map(item => <Breadcrumb.Item key={item.name} onClick={() => { this.props.setCategory(item) }}>{item.name}</Breadcrumb.Item>)
            }
          </Breadcrumb>
        </div>
        <div className="right">
          <Button className="add_button" type="primary" icon={<PlusOutlined />} onClick={() => { this.setState({ isModalVisible: true }) }}>添加</Button>
        </div>
        <Modal title="添加分类" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <Form
            {...{
              labelCol: {
                span: 4,
              },
              wrapperCol: {
                span: 14,
              }
            }}
            layout='horizontal'
            initialValues={{ remember: true ,layout: 'horizontal'}}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
        </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}