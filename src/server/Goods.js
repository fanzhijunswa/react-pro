import api from '../utils/auth'

export const getGoods = () => api.get('http://localhost:3000/api.json')