// Mutation 状态更新:
// 	Mutation 主要包括两个部分:
// 		字符串的事件类型(type -> 函数名称)
// 		一个回调函数,该回调函数默认的第一个参数就是state。
//
// Mutation 的基本使用:
	mutations: {
		increment(state) {
			state.counter++;
		},
	}

// 组件中通过mutation更新状态
	clickIncrement() {
		this.$store.commit('increment');
	}

// Mutation参数传递
// App中
methods: {
	add(count) {
		this.$store.commit('addCount', count);
	}
}

// mutation中
mutation: {
	addCount(state, count) {
		state.count += count
	}
}

// Mutation传递对象(payload--载荷)
// App中
methods: {
	add(count) {
		const stu = {id: 9, name: 'xxx', age: 30}
		this.$store.commit('addCount', stu);
	}
}

// mutation中
mutation: {
	addCount(state, stu) {
		state.student.push(stu)
	}
}
