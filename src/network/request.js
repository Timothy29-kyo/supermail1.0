import axios from "axios";
// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }

// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err => {
//       config.failure(err)
//     })
// }

//创建axios实例
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:7888/api/hy66/',
    timeout: 5000
  })


  //axios拦截器interceptor
  //1.比如config中的一些信息不符合服务器的要求

  //2.比如每次发送网络请求时，都希望界面中显示一个图标

  //3.某些网络请求（比如登录（token））必须携带一些特殊信息
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use(res => {
    console.log(res.data);
    return res.data
  }, err => {
    console.log(err);
  })




  //发送网络请求
  return instance(config)
  //返回的是promise,在main里可以调用then和catch函数


}