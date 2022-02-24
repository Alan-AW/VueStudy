// Action的基本使用:默认参数context(上下文)--理解为store对象即可
mutation: {
	UpdateInfo(state, payload) {  // 首先定义一个异步操作修改方法
		state.info.name = 'xxx';
		console.log(payload);  // {code: 'why'}
	}
},
action: {
	aUpdate(context, payload) {
		setTiomeout(() => {
			context.commit('UpdateInfo', payload);  // 参数为Mutation中定义的操作
			console.log(payload);  // {code: 'why'}
		}, 1000)
	}
}

// 组件中
new Vue({
	el: '',
	methods: {
		updateInfo() {
			this.$store.dispatch('aUpdate', {code: 'why'})  // 参数为action中定义的异步操作方法
		}
	}
})

// 参数的传递与Mutation一样，可以接收一个payload参数