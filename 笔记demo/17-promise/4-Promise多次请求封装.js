Promise 多次请求的封装: 当某一个功能需要发送两个网络请求,并且两次请求都要成功之后才能实现的话，就需要这个操作:


Promise.all([
  // 第一次网络请求
  new Promise((resolve, reject) => {
    $.ajax({
      url: '/',
      success: (data) => {
        console.log('once' + data);
      }
    })
  }),
  // 第二次网络请求
  new Promise((resolve, reject) => {
    $.ajax({
      url: '/home/',
      success: (data) => {
        console.log('twice' + data);
      }
    })
  })
]).then(result => {
  // 请求成功之后在这里统一处理
  console.log(result);
  /* 在这个例子种最终的结果会是两次网络请求的结果的一个数组 */
})