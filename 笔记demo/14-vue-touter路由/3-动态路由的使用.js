// .........................................................
// 普通路由映射关系: path: '/home'

const routers = [
  // 单独抽离出映射关系的配置
  {
    path: '/home',
    component: null,
  },
  {
    path: '/about',
    component: null,
  }
]

const router = new VueRouter({
  // 配置路由映射关系
  routers,
})

// 3.将router传入到Vue实例
// 3.1导出router对象
export default router;


// .........................................................
// 动态路由映射关系: path: '/user/:userName'

const routers = [
  // 单独抽离出映射关系的配置
  {
    path: '/user/:username',
    component: userApp,
  }
]

/*
当使用了动态路由绑定了一个属性的时候，在生成链接的时候router-link中的to属性中跳转目标地址中一定要加上该属性：
  <router-link to="/user/myname"></router-link>

这样在地址栏中便会出现该用户的用户名参数：localhost:8000/user/myname
*/


// .........................................................
/* 动态绑定参数：像上面的username这种参数应该是动态生成的，或者从服务器请求过来的，而不是直接写死的；
如何动态绑定路由中的参数：
  将该参数动态绑定到一个计算属性或者vue实例发起网络请求的时候请求过来的数据
*/

<router-link :to="'/user/'+username"><router-link/>  // 方式一
<p>{{$.route.params.username}}</p>  // 方式二  
<p>{{username}}</p>  // 方式三
new Vue({
  el: '#app',
  data() {
    return {username: 'myname'}  // 方式一
  },
  computed: {
    username() {
      return this.$route.params.username;  // 方式三
    }
  }
})


// ..........................................................
/*
如何获取路由中的参数：$route.params.映射关系中的路由绑定参数
例如：path: '/name:username'
那么：$route.params.username
如果是在计算属性或者data中获取该参数的话需要加上this.;
*/
