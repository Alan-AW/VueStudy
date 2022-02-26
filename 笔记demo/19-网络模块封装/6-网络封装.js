// 1.导入网络模块--axios
import axios from 'axios';

// 2.为了可扩展性，使用多个对象进行导出，尽量不使用default
// 此方法(Promise)比较多余，回调的方式除了Promise对象之外
// 还可以让外部在使用的时候传入success与errordefault两个函数进行回调，然后将网络数据进行回调到外部
// 或者将两个处理函数放入到config这个大对象中进行回调，但是一般推荐第三种方式：直接return instance(config)
export function request(config) {
  return new Promise((resolve, reject) => {
    // 1.创建asiox的实例
    const instance = axios.create({
      baseURL: '',
      timeout: 5000,
    })

    // 发送网络请求
    instance(config).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}


// app中使用：
import {request} from '';

request({
  url: '/home',
}).then(res => {
  console.log(res);
}).catch(res => {
  console.log(res);
})



// 3.因为创建的axios实例使用()进行调用的话，返回值就是一个Promise对象，所以可以直接返回
export function request(config) {
  return new Promise((resolve, reject) => {
    // 1.创建asiox的实例
    const instance = axios.create({
      baseURL: '',
      timeout: 5000,
    })

    // 发送网络请求
    return instance(config)
  })
}

// app中的使用
import {request} from '';

request({
  url: '',
}).then(res => {
  console.log(res);
}).catch(res => {
  console.log(res);
})