axios提供了拦截器,用于在发送每次请求或者得到响应后进行对应的处理;
为什么要使用拦截器?
  1: 请求拦截的作用;
    -config中的某些信息不符合服务器的要求,需要在请求之前进行修改;
    -每次发送网络请求的时候在界面中显示一些图标动画;成功之后再在响应成功中隐藏;
    -某些网络请求 (比如登录);需要携带一些特殊信息(Token);
  2; 响应拦截的作用;
    -对服务器响应数据的一些处理,处理完成之后必须将resout返回,否则.then();中无法获取到数据

使用;
  全局使用;
    // 发送请求的拦截--config中必须将config返回否则在后面发送网络请求的时候无法获取到本次请求的config信息。
    axios.interceptors.request.use(config=>{},err=>{})
    // 收到响应的拦截--resout中必须将resout返回，也可以只返回resout.data；因为data中才是服务器返回的数据。
    axios.interceptors.response.use(resout=>{},err=>{})

  对象使用;
    instance.interceptors.request.use(config=>{},err=>{})
    instance.interceptors.response.use(resout=>{},err=>{})


export function request(config) {
  return new Promise((resolve, reject) => {
    // 1.创建asiox的实例
    const instance = axios.create({
      baseURL: '',
      timeout: 5000,
    })

    // 2.拦截器
    instance.interceptors.request.use(
      config => {return config},  // 请求成功之后必须返回config
      err => {}      // 请求失败的拦截
    )

    instance.interceptors.response.use(
      config => {},  // 响应成功的拦截
      err => {}      // 响应失败的拦截
    )

    // 3.发送网络请求
    return instance(config)
  })
}
