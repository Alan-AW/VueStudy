// router-link的常规使用属性就是：to，用于指定跳转的路径
// 其他属性：tag
// 		tag可以指定router-link之后渲染成什么组件，比如默认会生成a标签，但是可以通过tag修改为li标签
<router-link to='home' tag="li">

// 其他属性：replace
// 		router-link默认使用的historyState，导致在多个link之间切换的时候，浏览器中的前进/返回箭头可点击，
			// 添加一个replace属性之后就将router-link的模式改为了replaceState，无法点击前进/返回按钮了
<router-link to='home' tag="li" replace></router-link>

// 其他属性：class
//    当某个router-link被点击的时候，会自动生成一个属性：router-link-active,如果对该点击的元素设置样式的话
// 		可以直接使用该属性进行设置
<style>
	.router-link-active {
		color: #f00;
	}
</style>

// 其他属性:active-class
// 		 修改上面的默认class属性
<router-link to='home' tag="li" replace active-class="active"></router-link>

// 在路由映射关系中，批量统一修改active-class属性
const router = new VueRouter({
  // 配置路由映射关系
  routers,
	linkActiveClass: 'active',  // 统一修改router-link活跃状态生成的class属性
	mode: 'history',
})

// 通过代码监听click事件跳转路由,
// 注意：不能通过historyState绕过路由系统去修改路由：history.push('home');
new Vue({
	el: '#app',
	methods: {
		click1() {
			this.$router.push('home');  // 可以使用返回按钮
			this.$router.replace('home');  // 无法使用返回按钮
		},
		click2() {
			this.$route.push('about');  // 可以使用返回按钮
			this.$router.replace('about');  // 无法使用返回按钮
		}
	}
})
