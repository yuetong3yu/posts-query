import axios from 'axios'
import { User } from './type'

export const getPostList = () => {
  return axios.get<{
    data: User[]
  }>(`https://dummyapi.io/data/v1/user?limit=10`, {
    headers: {
      'app-id': '65aa14c5f2f5f64475cdac28',
    },
  })
}
