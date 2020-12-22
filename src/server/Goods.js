import api from '../utils/auth'

const subsCategoryList = [
  {
    "parentId": "asdasdasdasdasdasd",
    "_id": "111",
    "name": "电视"
  }, {
    "parentId": "asdasdasdasdasdasd",
    "_id": "222",
    "name": "冰箱"
  }, {
    "parentId": "asdasdasdasdasdasd",
    "_id": "333",
    "name": "风扇"
  }, {
    "parentId": "asdasdasdasdasdasd",
    "_id": "444",
    "name": "空调"
  }, {
    "parentId": "asdasdasdasdasdasd",
    "_id": "555",
    "name": "电暖气"
  }, {
    "parentId": "asdasdasdasdasdasd",
    "_id": "666",
    "name": "游戏机"
  }, {
    "parentId": "klklklklkl",
    "_id": "777",
    "name": "变形金刚"
  },
]

export const getGoods = async goodsId => {
  let data = []
  if(goodsId === '0') {
    data = await api.get('http://localhost:3000/api.json')
  }else {
    data = subsCategoryList.filter(item => item.parentId === goodsId)
  }
  return new Promise(resolve => {
    resolve(data)
  })
}