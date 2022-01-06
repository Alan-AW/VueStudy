一：let / var
var 的设计 可以看成js语言设计上的错误， 但是这种错误不能修复和移除
因为需要向后兼容。 为了修复这个错误， 所以添加了一个新的关键字 let；
可以将 let 看成更完美的 var: let 具有块级作用域，var 没有,
	/*
		1.变量作用域：变量在什么范围内是可用。
			在es5之前if 和 for 都没有作用域的概念，所以避免变量污染，都必须依赖于function的作用域。
			在一个代码块内部定义的变量应该只能在这个代码块中被使用、访问，外部不能访问。
		2.没有变量作用域引发的问题：
	*/
var btns = document.getElementsByTagName('button');
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function () {
		console.log('第' + i + '个按钮被点击');
	})
}

/* 上面的代码中当点击了第一个按钮的时候会出现第 n 个按钮被点击；因为在click事件中使用的变量i一直在被改变。
		for循环会循环页面中找到的n个button按钮，每次遍历的时候都会改变一下i的值，但是在click事件中使用的i在使用
		之前就被for改变了*/
		
// 解决方法：闭包 -- js设计之初函数具有作用域，内部变量不会被外部改变。if 和 for 没有作用域

var btns = document.getElementsByTagName('button');
for (var i = 0; i < btns.length; i++) {
	(function (i) {
		btns[i].addEventListener('click', function () {
			console.log('第' + i + '个按钮被点击');
		})
	})(i);
}


// es6语法：
const buns = document.getElementsByTagName('button');
for (let i=0; i<btns.length; i++) {
	btns[i].addEventListener('click', function () {
		console.log('第' + i + '个按钮被点击');
	})
}

/* 此时for循环中的变量 i 有了作用域；假设找到了5个button按钮；实质上这个循环中不止有这一个监听函数，而是5个函数。
	因为函数具有作用域。所以：
	循环第一次会给第 i=0 个button 添加一个click事件，并且将此时的i=0传入到监听事件执行的函数中；
	循环第二次会给 i=1 个button 添加一个click事件，并且将此时的 i=1 传入到这个监听事件执行的函数中；
	...
*/



二:const
1. const //关键字在很多语言中已经存在，主要的作用是将某个变量修饰为常量。
在js中使用 const 修饰的标识符为常量不可被再次赋值，保证数据的安全性。
建议在es6开发中优先使用const。

2. 在使用 const 定义标识符必须要赋值，不可为空。

3. 常量的含义是指向的对象不能修改，但是可以改变对象的内部信息；
const obj = {
	name: 'xmj',
	age: 18,
	height: '170'
}

obj.name = 'xxj';
obj.age = 17;
obj.height = '168'

/* 属性可以更改，但是不能将 obj 再次指向一个新的对象。 obj = 'kobe' (错误示例)
		本质上是内存地址不可改变。
*/



三：对象的增强写法
1. 属性的增强写法
1.1 es5：

const name = 'xmj';
const age = 17;
const height = 1.80;

const obj = {
	name: name,
	age: age,
	height: height,
}

console.log(obj);

1.2 es6:
const obj = {name, age, height};
// 内部会自动处理成键值对


2. 函数的增强写法
2.1 es5
const funObj = {
	run: function () {
		
	},
	make: function () {
		
	}
}

2.2 es6
const funObj = {
	run() {
		
	},
	make() {
		
	},
}