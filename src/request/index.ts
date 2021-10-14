import axios from 'axios'
import { ElMessage } from 'element-plus'
const service = axios.create({
  baseURL: ''
})
service.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
service.interceptors.response.use(
  (res) => (res.status == 200 ? Promise.resolve(res) : Promise.reject(res)),
  (err) => {
    ElMessage.error(err)
  }
)
export default service
