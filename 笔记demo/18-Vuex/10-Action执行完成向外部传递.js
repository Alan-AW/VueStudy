// 当调用了Action中的方法，完成了修改操作的时候，需要将执行结果告返回组件中，起到一个类似通知的作用：
// 方式一、
//能完成，但是不够优雅，不推荐;在APP中调用dispatch的时候，传递一个大的对象过去，其中包含了数据和回调方法
//当内部完成提交之后再来回调APP中传递过来的回调方法;
const store = new Vuex.Store({
	state: {
		info: {
			name: 'coder',
			hobby: 'bsk'
		}
	},
	mutation: {
		UpdateInfo(state) {
			state.info.name = 'why';
		}
	},
	action: {
		aUpdateInfo(context, payload) {
			setTimeout(() => {
				context.commit('UpdateInfo');
				console.log(payload.message);
				payload.success();
			}, 1000)
		}
	},
})


//APP组件中
new Vue({
	el: '',
	methods: {
		update() {
			this.$store.dispatch('aUpdateInfo', {
				message: '携带的信息',
				success: () => {
					console.log('内部完成修改');
				}
			});
		}
	}
})



//-------------------------------------------------------------
//方式二，通过Permission传递（推荐；优雅永不过时）
//  当APP中调用了dispatch之后，就会去执行action中定义的方法，而此时，action中的提交方法返回了一个Promise对象
//  那么在外部就可以直接调用Promise中的then方法
const store = new Vuex.Store({
	state: {
		info: {
			name: 'coder',
			hobby: 'bsk'
		}
	},
	mutation: {
		UpdateInfo(state) {
			state.info.name = 'why';
		}
	},
	action: {
		aUpdateInfo(context, payload) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					context.commit('UpdateInfo');  // 此处可以传递参数到Mutation中
					console.log(payload.message);
					resolve('aa');
				}, 1000)
			})

		}
	},
})

// APP中
new Vue({
	el: '',
	methods: {
		update() {
			this.$store
					.dispatch('aUpdateInfo', {message: '携带的信息',})
					.then(res => {
						console.log('action已经完成了提交');
						console.log(res);
					});
		}
	}
})
