路由参数传递的方式：
	一、params类型
		配置路由格式：/user/:id
		传递方式：在path后面跟上对应的值
		传递后的路径：/user/123, /user/name
		
	二、query类型
		配置普通路由即可：/user
		传递方式：对象中使用query的key作为传递
		传递后的路径：/user?id=123, /user?id=name
		
	
	使用方法：
		params方式直接拼接参数即可：
			<router-link to="/user/username"></router-link>
		或者绑定到APP中的数据
			<router-link v-bind:to="'user/'+username"></router-link>
			
		query方式：
			<router-link v-bind:to="{path: '/user', query: {name: 'aa', age: 18, height: 1.65}}"></router-link>
		
	获取方式：两种方式一样的：
		$route.params.xxx
		$route.query.xxx
		
	通过代码跳转
		this.$router.path('/user');
		this.$router.path({
			path: '/user',
			name: 'haha',
			age: 18,
			height: 1.8
		})