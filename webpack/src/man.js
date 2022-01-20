import {testFunc} from './js/test.js';
import {css} from './css/test.css';

const app = new Vue({
	el: '#app',
	data: {
		message: '',
	},
	methods: {
		clickMe() {
			this.message = testFunc('点击了什么？');
		}
	}
})