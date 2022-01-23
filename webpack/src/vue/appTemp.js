import {testFunc} from "../js/test";

export default {
	template: `
		<div>
			<h2>{{message}}</h2>
			<button @click="clickMe">按钮</button>
			<h2>{{name}}</h2>
		</div>	
	`,
	data() {
		return {
			message: 'default text content',
			name: 'Mr`Xu',
		}
	},
	methods: {
		clickMe() {
			this.message = testFunc('点击了什么？');
		}
	}
}