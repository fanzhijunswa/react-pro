// class Api  {  
// }

import axios from 'axios'

const instance = axios.create()


instance.interceptors.response.use(res => {
  return res?.data??res
},
error => {
  return Promise.reject(error)
}
)
const apiFun = (url,data,method) => {
  return new Promise((resolve,reject) => {
    instance({
      url,
      method,
      [method.toLocaleLowerCase === 'get' ? 'params' : 'data'] : data
    }).then(resp => resolve(resp),e => reject(e))
  })
}

class Api {
  get=(url,data = {}) => apiFun(url,data,'get')
  post=(url,data = {}) => apiFun(url,data,'post')
  delete=(url,data = {}) => apiFun(url,data,'delete')
  put=(url,data = {}) => apiFun(url,data,'put')
}

export default new Api()
