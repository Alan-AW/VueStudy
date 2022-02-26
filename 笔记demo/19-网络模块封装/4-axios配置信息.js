// axios全局配置：
axios.defaults.baseURL = 'https://www.missyouc.cn/....';  // 服务器请求根路径
axios.defaults.headers.post['Content-Type'] = 'apploacation/x-www-form-urlencoded';  // 请求头
axios.defaults.timeout = 5000 // 单位毫秒

// 常规配置选项:
    url: '/'
// 请求类型
    method: 'get/post/...'
// 请求根路径
    baseURL: 'https://www.missyouc.cn'
// 请求前数据处理
    trnasformRequest: [function(data){}]
// 请求后数据处理
    trnasformResponse[function(data){}]
// 自定义请求头
    headers: {'x-Requested-With":"XMLHttpRequest'}
// URL查询对象
    params: {key: value}  // query也可以


// 查询对象序列化函数
    paramsSerializer: function(params){}
// rquest body
    data: {key: value}
// 超时设置
    timeout: 5000
// 跨域是否携带Token
    withCredentials: false
// 自定义请求处理
    adapter: function(resolve, reject, config){}
// 身份验证信息
    auth: {username: '', pwd: ''}
// 响应的数据格式
    responseType: 'json'/'blob'/'document'/'arraybuffer'/'text'/'stream'
