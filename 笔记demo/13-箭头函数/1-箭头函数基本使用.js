/*
 * ES6中的箭头函数基本使用；
 * 什么时候使用箭头函数：当把一个函数作为参数传入一个函数的时候。
 * */

// 例如，setTimeOut函数，常规写法
setTimeout(function() {
	pass
}, 1000)

// 箭头函数写法
setTimeout(() => {
	pass
}, 1000)

// 箭头函数使用方法

//  无参数函数
const aa = () => {
	return '';
}

// 有两个参数
const sum = (num1, num2) => {
	return num1 + num2;
}

// 有一个参数：省略掉括号
const sun = num => {
	return num * num;
}

// 代码块中有多行代码
const mul = (num1, num2) => {
	console.log('多行代码直接正常写');
	return num1 + num2;
}

// 代码块中只有一行代码
const mut = (num, num1) => num1 + num;
/* 代码块中只有一行代码的情况下，直接将箭头后方的代码执行结果进行自动返回 */
/* 如果没有返回值，例如：console.log函数，他的执行的返回值为undefand */
const demo = () => console.log('返回值为none,但是仍然会执行console.log函数')
