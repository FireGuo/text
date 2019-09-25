export default {
  method: 'post',
  // 基础url前缀
  // baseURL: 'https://suggest.taobao.com',
  // baseURL: 'http://202.108.199.7:8080/RJJHPTPro',
  baseURL:{
    blank:"",
    map:"www.baidu.com"
  },
  // baseURL: process.env.BASE_API,// webpack配置的基础url
  // 请求头信息
  headers: {
    'Content-Type':'application/json;charset=UTF-8'
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: false,
  // 返回数据类型
  responseType: 'json'
}
