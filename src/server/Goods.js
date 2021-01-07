import goods from './item'

export const getGoods = id => {
  return new Promise((resolve,reject) => {
    switch(id) {
      case '0': resolve(goods[0]);break;
      case 'asdasdasdasdasdasd': resolve(goods[1]);break;
      case '00000000001': resolve(goods[2]);break;
      case 'xxxxxxxxxxx1': resolve(goods[3]);break;
      case 'bbbbbbbbb1': resolve(goods[4]);break;
      default: resolve([])
    }
  })
}