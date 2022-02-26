/**
 * 分布式部署服务器的时候会部署多个服务器，不同的服务器可能处理不同的业务，如果仅仅使用全局的axios进行网络请求的话
 * 会造成请求不到数据的情况，所以不能再使用全局的配置了。
 * 需要进行单独的配置：那么这个时候就可以创建不同的实例来进行发送网络请求
 * 
 * 分布式服务器概念：
 * 部署一个nginx服务器来进行反向代理所有业务服务器，然后他会根据客户端请求的数据量来分发到不同的业务服务器中。
 */

// 创建home页面的网络请求
const homeInstance = axios.create({
  baseURL: 'https://www.missyouc.cn',
  timeout: 5000
})

// 创建分类页面的网络亲求
const cateInstance = axios.create({
  baseURL: 'https://www.httporg.org',
  timeout: 1000,
  Headers: ''
})

// 使用
homeInstance({
  url: '/home/data',
}).then(res => {
  console.log(res);
})

cateInstance({
  url: '/category/all',
}).then(res => {
  console.log(res);
})