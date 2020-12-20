// class Api  {  
// }

import {axios} from 'axios'

const apiFun = (url,data,method) => {
  return new Promise((resolve,reject) => {
    axios({
      url,
      method,
      [method.toLocaleLowerCase === 'get' ? 'params' : 'data'] : data
    }).then(resp => resolve(resp),e => reject(e))
  })
}

export default class Api {
  get=(url,data) => apiFun(url,data,'get')
  post=(url,data) => apiFun(url,data,'post')
  delete=(url,data) => apiFun(url,data,'delete')
  put=(url,data) => apiFun(url,data,'put')
}