<template>
	<div>
		<h2 class="title">{{message}}</h2>
		<button @click="clickMe">按钮</button>
		<h2>{{name}}</h2>
	</div>
</template>

<script>
	import {testFunc} from "../js/test";

  export default {
		name: 'temp',
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
</script>

<style scoped="scoped">
	.title {
		color: #00FFFF;
		background-color: #FF0000;
	}
</style>
