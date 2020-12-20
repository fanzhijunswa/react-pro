import React from 'react'
import { Form, Input, Button, message } from 'antd';
import {withRouter} from 'react-router-dom'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};

class LoginContent extends React.Component {
  constructor(props,state) {
    super(props,state)
  }
  onFinish = values => {
    console.log(values)
    this.props.history.push('/')
  }
  onFinishFailed = () => {
    message.error('请完整填写表单');
  }
  //在这里我们手动返回一个Promise对象，下方我们采用的是async函数
  onUserNameValidate= (rule,value) => {
    return new Promise((resolve,reject) => {
      switch(true) {
        case !value: reject('用户名不能为空');return;
        case !/^[\u4e00-\u9fa5\w]+$/.test(value): reject('用户名必须为中文、数字、字母、下划线构成');return;
        case !/^[\u4e00-\u9fa5\w]{4,6}$/.test(value): reject('用户名的长度只能为4到6位');return;
      }
      resolve()
    })
  }
  // 自定义校验规则，接受的是promise的返回值，所以也就是resolve的返回值和reject的返回值，那么我们可以通过返回一个promise对象，或者是将这个校验函数设置为一个async函数，这个函数也会返回一个promise对象，如果我们通过 throw new Error一个错误信息的话，async返回的Promise就是Promise.reject，这个函数默认返回的是一个Promise.resolve()
  onPwdValidate = async (rule,value) => {
      switch(true) {
        case !value: throw new Error('密码不能为空');break;
        case !/^\w+$/.test(value): throw new Error('密码必须为数字、字母、下划线构成');break;
        case !/^\w{6,12}$/.test(value): throw new Error('密码的长度只能为6到12位');break;
    }
  }
  // 还可以通过捕获异常的方式和第三个callback的方式来实现自定义校验，这里callback会返回的就是一个Promise.reject错误数据
  onNoneValidate = (rule,value,callback) => {
    try{
      switch(true) {
        case !value: throw new Error('测试字段不能为空');break;
        case !/^[\u4e00-\u9fa5\w]+$/.test(value): throw new Error('测试字段必须为中文、数字、字母、下划线构成');break;
        case !/^[\u4e00-\u9fa5\w]{4,6}$/.test(value): throw new Error('测试字段的长度只能为4到6位');break;
      }
      callback()
    }catch(e){
      callback(e)
    }
  }
  render() {
    return (
      <div className="login-content">
        <div className="container">
          <div className="form-all">
            <div className="form-up">
              <h1>登陆</h1>
            </div>
            <div className="form-down">
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
              >
                <Form.Item
                  label="用户名："
                  name="username"
                  rules={[{validator: this.onUserNameValidate}]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="密码："
                  name="password"
                  rules={[{validator: this.onPwdValidate}]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  label="无作用："
                  name="none"
                  rules={[{validator: this.onNoneValidate}]}
                >
                  <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginContent)