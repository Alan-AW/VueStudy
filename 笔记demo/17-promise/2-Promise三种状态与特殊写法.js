Promise 的三种状态:
  pending: 等待状态;正在进行网络请求,或者定时器没有到时间;
  fulfill: 满足状态,当主动调用了 resolve() 方法的时候就会进入该状态,并且会回调 then() 下一步操作;
  reject: 拒绝状态,当请求失败,或者请求到的数据存在error信息的时候会进入该状态,并且会回调.catch()方法;


Promise 的特殊写法:
  // 在 then() 方法中可以传递两个参数分别对fulfill状态和reject状态进行处理;
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('请求处理');
    }, 2000)
  }).then((data) => {
    console.log('请求成功处理');
  }, (err) => {
    console.log('请求失败处理');
  })

  