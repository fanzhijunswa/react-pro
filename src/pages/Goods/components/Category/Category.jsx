import React from 'react'
import { getGoods } from '../../../../server/Goods'
import { Table, Button,Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import './Category.less'
import { sleep } from '../../../../utils/tools'

export default class Category extends React.Component {
  state = {
    tableList: [],
    goodsId: '0',
    goodsName: '',
    goodsMap: new Map([])
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
    console.log(this)
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
            <Button type="link" onClick={() => this.checkSubs(category)}>查看子分类</Button>
          </span>
        ),
      },
    ];
  }
  checkSubs = ({ _id: goodsId, name: goodsName }) => {
    const goodsMap = new Map([...this.state.goodsMap, [
      goodsName, goodsId
    ]])
    this.setState({
      goodsId,
      goodsName,
      goodsMap
    }, () => {
      this.getTableList(goodsId)
    })
  }
  async getTableList(goodsId) {
    return new Promise(async (resolve, reject) => {
      try {
        this.loading = true
        await sleep(1000)
        const tableList = await getGoods(goodsId)
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
    this.getTableList(this.state.goodsId)
  }
  render() {
    return (
      <div id="Category">
        <Card title="一级分类列表" extra={<Button type="primary" icon={<PlusOutlined />}>添加</Button>}>
          <Table
            bordered
            rowKey="_id"
            pagination={{ ...this.pageOption }}
            loading={this.state.loading}
            columns={this.columnList}
            dataSource={this.state.tableList}
          />
        </Card>
      </div>
    )
  }
}