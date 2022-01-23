import Vue from 'vue'

/*
* vue终极使用方案：
* 1.首先新建一个后缀为  .vue 的文件
* 2.在生成的vue文件中有三个模块：template、script、style
* 3.分别对应当前组件的HTML结构，vue实例或者js代码，最后是当前组件的css样式表
* 4.安装vue-loader 和 vue-template-compiler 这两个loader
* 	npm install --save vue-loader vue-template-compiler
* 5.vue文件的js代码块中直接默认导出该组件：
* 	export default {
* 		template: {},
* 		data() {},
* 		methods: {},
* 		......
* }
* 6.项目入口直接导入该组件注册使用即可：
* 	import temp from './vue/appTemp.vue';
		 new Vue({
			el: '#app',
			template: '<temp/>',
			components: {
				temp,
			}
		})
* 7.打包HTML文件的plugin
* 	npm install --save-dev html-webpack-plugin
* 8.配置HTML打包插件;同时注销 output 中的 publicPath: 'dist/',
*		const HtmlWebpackPlugin = require('html-webpack-plugin');
* 	plugins: [
* 		new HtmlWebpackPlugin({template: './index.html'})
* 	],
* 9.压缩js代码（丑化js代码）,这个插件的版本要与CLI2的版本保持一致，所以指定1.1.1
* 	运行：npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
* 10.配置该插件：
* 	const UglifyjsPlugin = require('uglifyjs-webpack-plugin')
* 	plugins: [
* 		new UglifyjsPlugin(),
* 	],
* 11.搭建本地node服务器，可以自动实现修改代码之后自动生效(该2.9.3版本匹配的是CLI2对应webpack3.6.0)
* 	npm install --save-dev webpack-dev-server@2.9.3
* 12.配置文件修改：
* 	devServer: {
* 		contentBase: './dist',
* 		inline: true,  // 实时监听刷新页面
* 		port: 8008,  // 指定端口。默认是8080
* 	}
* 13.启动服务(可以使用相对路径找到webpack-dev-server指定执行该命令)
* 		./node_modules/.bin/webpack-dev-server
* 	package.json再次配置执行脚本:"dev": 'webpack-dev-server'
			"scripts": {
				"test": "echo \"Error: no test specified\" && exit 1",
				"build": "webpack",
				"dev": 'webpack-dev-server --open',
			},
* 14.执行：npm run dev
*
* */
