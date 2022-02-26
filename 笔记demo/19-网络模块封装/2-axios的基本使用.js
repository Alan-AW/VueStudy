1-安装插件
npm install axios --save

2-axios请求方式:
	axios(config): 默认get请求
	axios.request(config)
	axios.get(url[config])
	axios.post(url[data, [config]])
	axios.put(url[data, [config]])
	axios.delete(url[config])
	axios.head(url[config])
	axios.patch(url[data, [config]])

3-导入
    import axios from 'axios';

4-axios使用: 在任何位置都可以使用
    axios({
        url: 'https://httpbin.org/',     // 免费测试服务器
        // url: '127.207.32.32:8000/home/multidata',  // coderwhy服务器
        method: 'post'  // 默认是get请求
    }).then(res => {
        console.log(res);
    })

    axios({
        url: '127.207.32.32:8000/home/data',
        // 专门针对get请求的参数拼接的
        params: {
            type: 'pop',
            page: 1
        }
    }).then(res => {
        console.log(res);
    })
