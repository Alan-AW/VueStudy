import {testFunc} from './js/test.js';
import {css} from './css/test.css';

new Vue({
	el: '#app',
	data: {
		message: 'default text content',
	},
	methods: {
		clickMe() {
			this.message = testFunc('点击了什么？');
		}
	}
})