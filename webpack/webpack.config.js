const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/man.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		// publicPath: 'dist/',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192,
						name: 'img/[name].[hash:8].[ext]',
					}
				}]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				// 此处会报错：提示vue配置有问题，缺少一个插件之类的，
				// 一般都是vue-loader版本问题，修改版本为13.0.0之后重新安装以下即可
				test: /\.vue$/,
				use: ['vue-loader'],
			},
		]
	},
	resolve: {
		// 解决后缀问题，配置上之后可以在引入文件的时候不写后缀
		extensions: ['.js', '.css', '.vue'],
		// 别名
		// 支持template模版vue开发版本，不使用runtime-only
		// 而使用runtime-compiler进行编译template
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},

	// 安装插件
	plugins: [
		// 版权声名：打包之后的js文件首行会自动添加上这个版权说明信息,但是丑化js之后哦就没有意义了。会被压缩删除掉。
		new webpack.BannerPlugin('最终版权归codeMe所有'),
		// 打包HTML插件
		new HtmlWebpackPlugin({template: 'index.html'}),
		// 压缩js代码--开发阶段不需要，最终打包才需要
		// new UglifyjsPlugin(),
	],

	// 搭建本地服务器--开发阶段需要，发布不需要
	devServer: {
		contentBase: './dist',
		inline: true,  // 实时监听刷新页面
		port: 8008,  // 指定端口。默认是8080
	}
}
