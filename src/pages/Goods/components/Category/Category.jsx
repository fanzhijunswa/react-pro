import React from 'react'
import CategoryBreadCrump from './components/CategoryBreadCrump'
import CategoryTable from './components/CategoryTable'
import { sleep } from '../../../../utils/tools'

export default class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryBarList: [],
      tableList: [],
      parentId: '0'
    }
  }

  onRef = ref => {
    this.child = ref
  }

  componentWillMount() {
    const {categoryBarList} = this.state
    Array.prototype.push.call(categoryBarList,{_id:undefined,name:'首页'})
    this.setState({categoryBarList})
  }

  async componentDidMount() {
    const { tableList, parentId } = this.state
    const subs = await this.child.getTableList(parentId)
    Array.prototype.push.call(tableList, subs)
    this.setState({
      tableList
    })
  }


  setCategory = async category => {
    const { categoryBarList, tableList } = this.state
    let {parentId} = this.state
    if (category._id === undefined) {
      Array.prototype.splice.call(categoryBarList, 1)
      Array.prototype.splice.call(tableList, 1)
    } else {
      const index = categoryBarList.findIndex(item => item._id === category._id)
      parentId = index === -1 ? category._id : category.parentId
      if (index === -1) {
        const subs = await this.child.getTableList(parentId)
        Array.prototype.push.call(categoryBarList, category)
        Array.prototype.push.call(tableList, subs)
      } else {
        Array.prototype.splice.call(categoryBarList, index + 1)
        Array.prototype.splice.call(tableList, index + 1)
      }
    }
    this.setState({
      categoryBarList,
      tableList,
      parentId
    }, () => {
      console.log(this.state.tableList)
      // this.child.getTableList()
    })
  }

  render() {
    return (
      <div id="Category">
        <CategoryBreadCrump setCategory={this.setCategory} categoryBarList={this.state.categoryBarList} />
        <CategoryTable onRef={this.onRef} parentId={this.state.parentId} setCategory={this.setCategory} tableList={this.state.tableList} />
      </div>
    )
  }
}