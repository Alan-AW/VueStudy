/*
				生产环境与开发环境配置分离-删除原来的webpack.config.js文件

* 1.项目根目录新建一个build文件夹
* 2.生成三个js配置文件：Base.config.js\dev.config.js\prod.config.js
* 3.抽取出公共配置，开发配置和编译配置。注意开发使用js中只需要本地服务器配置
* 4.运行：npm install webpack-merge --save-dev
* 5.使用合并插件将base配置分别与当前配置合并导出：
* 	5.1：导入base配置与合并插件：
* 		const baseConfig = require(./base.config.js);
* 		const webpackMerge = require('webpack-merge');
* 	5.2: 合并导出：
* 		webpackMerge传入两个参数，第一个为base配置，第二个就是当前配置文件中的配置对象；
* 		module.exports = webpackMerge(baseConfig, {
* 			plugins: [
* 				......
* 		]
* 	})
* 6.package.json配置文件中将原来配置的：build: "webpack" 修改为：
		build: "webpack --config ./build/prod.config.js"
* 7.同样将dev指令也修改为 dev: "webpack-dev-server --open --config ./build/dev.config.js" 即可
* 8.base文件夹中再次修改打包目录：path: path.resolve(__dirname, '../dist'),
* 	否则打包之后的文件都会放在build这个目录的dist文件夹下，打包文件应该是放在根目录中的dist中
* */