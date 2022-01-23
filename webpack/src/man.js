import {css} from './css/test.css';
import Vue from 'vue';
import temp from './vue/appTemp'
// import temp from './vue/appTemp.vue';

new Vue({
	el: '#app',
	template: '<temp/>',
	components: {
		temp,
	}
})