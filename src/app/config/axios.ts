import axios from "axios"

//重新配置axios
const http = axios.create({
  timeout: 50000,
})

//添加拦截
http.interceptors.request.use(
  (config) => {
    console.log("请求被拦截")
    return config
  },
  (error) => {}
)

http.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    return error
  }
)

export default http
