import React from 'react'
import { getGoods } from '../../../../server/Goods'
import { Table, Button } from 'antd';
import './Category.less'
import { sleep } from '../../../../utils/tools'

export default class Category extends React.Component {
  state = {
    tableList: [],
    goodsId: '0',
    goodsName: '',
  }
  loading = false

  pageOption = {
    total: 0,
    defaultPageSize: 5,
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: [5, 10, 15, 20]
  }
  constructor(props, state) {
    super(props, state)
  }

  initColumnList = () => {
    this.columnList = [
      {
        title: '分类的名称',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '操作',
        width: 300,
        dataIndex: '',
        key: 'x',
        render: category => (
          <span>
            <Button type="link" >修改分类</Button>
            <Button type="link">查看子分类</Button>
          </span>
        ),
      },
    ];
  }
  async getTableList() {
    return new Promise(async (resolve, reject) => {
      try {
        this.loading = true
        await sleep(1000)
        const tableList =  await getGoods()
        this.pageOption.total = tableList.length
        this.setState({ tableList })
      } catch (e) {
        console.warn(e)
      } finally {
        this.loading = false
      }
    })
  }
  componentWillMount() {
    this.initColumnList()
  }
  async componentDidMount() {
    this.getTableList()
  }
  render() {
    return (
      <div id="Category">
        <Table
          bordered
          rowKey="_id"
          pagination={{ ...this.pageOption }}
          loading={this.state.loading}
          columns={this.columnList}
          dataSource={this.state.tableList}
        />
      </div>
    )
  }
}