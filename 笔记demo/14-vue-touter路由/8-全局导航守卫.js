需要实现一个功能：当用户点击跳转到某个页面的时候将网页的title修改掉
实现方法：	
一、普通路由跳转监听——通过回调函数进行修改——————————————————————————————————
Vue组件生命周期中的回调函数：
	export default {
		name: 'Home',
		data() {
			return {
				message: '欢迎访问',
			}
		},
		
		// Vue生命周期回调函数：
		beforeCreate() {
			// 创建该组件之前回调该函数
		},
		created() {
			// 创建出当前组件(使用该组件)的时候会进行回调该函数
			document.title = '首页';
		},
		mounted() {
			// 挂载该组件到DOM中的时候会回调该函数
		},
		beforeUpdate() {
			// 再次渲染之前回调该函数，也就是页面发生改变之前
		},
		updated() {
			// 界面发生刷新（改变）的时候会回调该函数
		},
		beforeDistory() {
			// 销毁该组件之前回调该函数
		},
		destoryed() {
			// 组件被销毁时回调该函数
		},
	}
	
	
	二、前置钩子（全局导航守卫监听页面的跳转）———————————————————————————————————————————
	// 在router配置文件中的index.js文件内再次调用一个方法：beforeEach。
	// 该方法是在页面跳转之前的操作
	router.beforeEach((to, from, next) => {
		document.title = to.matched[0].meta.title;
		next();
	})
	
	注意：
		1-该方法是通过查看其源码发现的三个参数，且必须要调用一下其内部的next方法！！否则所有路由组件都将无效。
		2-在路由映射关系中加入meta参数，用来定义当前路由的title元数据（描述数据的数据）：
			{
				path: '/home',
				component: Home,
				meta: {
					title: '首页'
				}
			}
		3-如果页面没有嵌套路由的话可以直接使用：to.meta.title 来获取到title信息
		4-next中可以传入参数进行指定跳转到某个页面（比如未登陆的时候可以给用户跳转到登陆页面）


	三、后置钩子，afterEach方法可以不需要手动调用一次 next() 方法
		// 该方法是在页面跳转之后的操作
		router.afterEach((to, form) => {
			console.log('后置钩子');
		})
		
	四、路由独享守卫：在路由的映射关系中直接进行配置
	{
		path: '/home',
		component: Home,
		meta: {
			title: '首页',
		},
		beforeEnter: (to, from, next) => {
			.../
			next(),
		}
	}
	
	五、组件内的守卫：直接在Vue组件中进行定义
		beforeRouterEnter(to, from, next) {
			// 在渲染组件的对应路由被confirm钱调用，不能获取到组件实例this，因为组件还没被创建
		},
		
		beforeRouterupdate(to, from, next) {
			// 在当前路由改变，但是该组价被复用时调用：比如对于一个带有动态参数的路径/foo/1 和 foo/2
			// 之间跳转的时候由于会渲染同样的foo组件，所以foo会被重复使用，此时会调用该方法，且可以访问this
		},
		
		beforeRouterLeave(to, from, next) {
			// 导航离开该组件的对应路由时调用，可以访问this
		}
