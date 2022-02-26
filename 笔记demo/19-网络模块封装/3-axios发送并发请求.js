// 并发网络请求：axios.all
// 常规使用方法语法： axios.all([axios({}), axios({})]).then(res => {})
// 使用过滤器解构： axios.all([axios({}), axios({})]).then(axios.spread((res1, res2) => {}))

axios.all([
    axios({
        url: '127.207.32.32:8000/home/multidata',
    }),
    axios({
        url: '127.207.32.32:8000/home/data',
        // 专门针对get请求的参数拼接的
        params: {
            type: 'pop',
            page: 2
        }
    })
]).then(res => {
    console.log(res[0].data);
    console.log(res[1].data);
})
