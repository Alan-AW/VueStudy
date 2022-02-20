Promese 链式调用:
  链式调用一;普通异步链式
  new Promese((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
      if (!data) {
        reject(err);
      }
    }, 1000)
  }).then((data) => {
    console.log('success!');

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
        if (!data) {
          reject(err);
        }
      }, 2000)
    }).then((data) => {
      console.log('twice success!');

      return new Promise((resolve, reject) => {
        pass
      })
    }).catch((err) => {
      console.log('twice error message!');
    })
  }).catch((err) => {
    console.log('error message!');
  })


  链式调用二;非异步请求操作
  /* 假设网络请求的结果为{success: true, message: 'aaa'}
  ==处理==> {success: true, message: 'aaa111'}
  ==处理==> {success: true, message: 'aaa111222'}
  */
  new Promise(resolve => {
    setTimeout(() => {
      resolve('aaa');
    })
  }).then(ret => {
    console.log(ret);
    return new Promise(resolve => {
      resolve(ret + '111');
    })
  }).then(ret => {
    console.log(ret);
    return new Promise(resolve => {
      resolve(ret + '222')
    })
  }).then(ret => {
    console.log(ret);
  })


  链式调用三;简化
  new Promise(resolve => {
    setTimeout(() => {
      resolve('aaa');
    })
  }).then(ret => {
    console.log(ret);
    return Promise.resolve(ret + '111');
  }).then(ret => {
    console.log(ret);
    return Promise.resolve(ret + '222');
  }).then(ret => {
    console.log(ret);
  })

  链式调用四;极度简化
  new Promise(resolve => {
    setTimeout(() => {
      resolve('aaa');
    })
  }).then(ret => {
    console.log(ret);
    return ret + '111';
  }).then(ret => {
    console.log(ret);
    return ret + '222';
  }).then(ret => {
    console.log(ret);
  })

  链式调用五;异步错误调用
  new Promise(resolve => {
    setTimeout(() => {
      resolve('success message');
    }, 1000);
  }).then(ret => {
    console.log(ret);
    throw 'error message';  // 抛出异常
    Promise.reject('error message')  // 或者直接调用
   
  }).catch(err => {
    console.log(err);
  })
  