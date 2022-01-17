// import {path} from 'path';
const path = require('path');

module.exports = {
	entry: './src/man.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	}
}
