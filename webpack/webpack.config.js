const path = require('path');

module.exports = {
	entry: './src/man.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		
	},
	mode: 'development',
	module: {
		rules: [{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192,
						publicPath: 'dist/',
						name: 'img/[name].[hash:8].[ext]',
					}
				}]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
		]
	}
}
