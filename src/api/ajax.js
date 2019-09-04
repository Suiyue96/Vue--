/*
请求函数模块
返回值：promise对象（异步返回的数据是response.data,而不是response）
如果请求是get请求，我们就把data数据拼接到url里面去
如果请求是post，刚好接收一个对象
前面是拼参数的问题
*/ 
import axios from "axios"
//暴露请求函数（请求地址url，请求数据data，请求类型get）
export default function ajax(url, data={},type='GET'){
    // 封装函数
    return new Promise(function (resolve, reject) {

    let promise
    //"GET"请求
    if (type === 'GET') {
      // 准备url query参数数据（query请求加问号）
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        //取出来data[key]进行参数的拼接操作
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    }
    //"POST"请求
    else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    //axios返回的promise就是response和error
    //成功的回调(resolve)
    promise.then(response => {
      //成功直接返回data数据
      resolve(response.data)
    })
    //失败的回调(reject)
    .catch(error => {
        reject(error)
    })
  })
}