import React from 'react'
import { Table, Button } from 'antd';
import { getGoods } from '../../../../../../server/Goods'


export default class CategoryTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading : false
    }
    this.pageOption = {
      total: 0,
      defaultPageSize: 5,
      showSizeChanger: true,
      showQuickJumper: true,
      pageSizeOptions: [5, 10, 15, 20]
    }
  }
  
  get currentTableList() {
    const {tableList} = this.props
    return tableList.length ? tableList[tableList.length - 1] : tableList
  }

  // get getPagination () {
  //   const {currentTableList,pageOption} = this
  //   return {...pageOption,total:currentTableList.length}
  // }

  // get isFirst() {
  //   const {parentId} = this.props
  //   return parentId === '0'
  // }

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
            {
              <Button type="link" onClick={() => {this.props.setCategory(category)}}>查看子分类</Button>
            }
          </span>
        ),
      },
    ];
  }

  getTableList = parentId => {
    return new Promise(async (resolve, reject) => {
      try {
        const tableList = await getGoods(parentId)
        resolve(tableList)
      } catch (e) {
        reject(e)
      }
    })
  }


  componentWillMount() {
    this.initColumnList()
  }
  componentDidMount() {
    this.props.onRef(this)
    // this.props.getTableList()
    // this.getTableList()
  }
  render() {
    return (
      <div id="CategoryTable">
        <Table
          bordered
          rowKey="_id"
          pagination={this.state.pageOption}
          // loading={this.state.loading}
          columns={this.columnList}
          dataSource={this.currentTableList}
        />
      </div>
    )
  }
}