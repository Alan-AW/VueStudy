// 一、安装
// 	npm install vuex --save

/*
* 二、src新建目录-store(仓库) -- 新建js文件(index.js)
*
* 三、使用
* */
import Vue from 'vue';
import Vuex from 'vuex';

// 安装插件
vue.use(Vuex);

// 创建对象
const store = new Vuex.Store({
	// 固定写法，包含以下内容
	state: {  // 定义公共状态
		counter: 1000
	},

	mutations: {  // 定义对公共状态的修改方法
		add() {
			counter++;
		},
		down() {
			counter--;
		}
	},
	actions: {},  // 异步操作处理
	getters: {},  // 类似计算属性
	modules: {}  // 模块化进行保存一些状态数据
})

// 导出
export default store;


// 四、挂载：man.js文件中引入当前store插件，直接挂载
import Vue from 'vue';
import App from '../../tabbar/src/App';
import store from './store';

new Vue({
	el: '',
	store,  // 挂载
	render: h => h(App)
})


// 五、App中使用：通过 $store 可以获取所有store中的数据
// <h2>{{$store.state.counter}}</h2>
//！！！！！！！！强烈不建议这么操作，无法跟踪到状态的具体修改程序

// 六、正确修改状态流程
// 1.在store对象中的mutations中定义对状态的修改方法，
mutations: {
	...
}
// 2.在vue实例中使用commit方法进行提交对状态的修改
methods: {
	xxCLick()
	{
		this.$store.commit('add');  // mutations中定义的方法
	}
}
