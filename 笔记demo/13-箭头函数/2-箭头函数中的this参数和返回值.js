// 箭头函数中this的使用
/* 箭头函数中的this就是最近作用域中的this，
	向外层作用域中一层层查找this，知道有this的定义为止。
	就是直接在调用this的地方直接向上(外)进行查找
*/
// 例如：
const obj = {
	aaa() {
		setTimeout(function () {
			console.log(this);  // window对象
		})

		setTimeout(() => {
			console.log(this);  // obj对象
		})
	}
}

const object = {
	aaa() {
		setTimeout(function() {
			setTimeout(function() {
				console.log(this);  // window对象
			}),
			
			setTimeout(() => {
				console.log(this);  // window对象
			})
		}),
		
		setTimeout(() => {
			setTimeout(function() {
				console.log(this);  // window对象
			}),
			
			setTimeout(() => {
				console.log(this);  // object对象
			})
		})
	}
}
