/* 因为Vue内部体检使用单一状态树，那么当业务拓展得非常广泛的时候，state会变得非常臃肿
modules模块化，就能解决这个问题，在modules中继续定义Store对象中的所有对象，
在这个新对象中的modules对象中又可以继续定义所有对象，这样就可以形成套娃模式一直嵌套下去
注意：
	1.所有的方法都不能重名，修改的调用方法都是直接commit或者dispatch或者getters
	2.模块中的getters如果需要使用getters参数，那么调用的就是当前模块中的getters
	3.子模块中引用大模块中的state中的状态需要额外加一个参数 "rootState"
	4.字模块中的actions默认参数也是context，但是他不是指代的根Store对象，他指代的是当前模块对象，
		也就是说在子模块中调用了context.commit方法的时候，应该是调用当前模块中mutations中定义的方法而不是根组件Mutation中的方法
		如果需要使用根模块中的方法或者状态的话，可以使用
		context.rootGetters\context.rootState
	5.对象的解构写法：
		actions中或者getters中可以使用ES6的语法进行对象的解构；将这个对象包含的属性拆解成参数放在一个对象当中：
			context => {state, commit, rootState}
			getters => {state, getters, rootGetters}....
	6.尽量将除了state之外的其他四个核心全都抽离放到单独的文件中，将模块放到单独的文件夹中，进行引用。
 */
const Amodule = {
	state: {},
	mutations: {},
	actions: {},
	getters: {},
	modules: {},
}

const Bmodule = {
	state: {},
	mutations: {},
	actions: {},
	getters: {},
	modules: {},
}

const store = new Vuex.Store({
	modules: {
		moduleA: Amodule,  // 最终会将moduleA放入到state中
		moduleB: Bmodule  // 最终会将moduleB放入到state中
	}
})

export default store

// App中使用
store.state.moduleA  // --> A 模块的状态
store.state.moduleB  // --> B 模块的状态