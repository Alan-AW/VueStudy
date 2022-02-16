一、exclude和include属性
	1.include 表示只允许哪些组件进入缓存：当使用了该属性的时候，
	属性值匹配成功的“组件名”将会进行缓存。
		<keep-alive include="User,Profile,..." /> ---- 不能加空格，加了空格无效
	
	2.exclude 表示排除哪些组件进入缓存：当使用了该属性的时候，
	属性值匹配成功的“组件名”将不会进行缓存，每次打开都会创建，离开都会被销毁
		<keep-alive exclude="User,Profile,..." /> ---- 不能加空格，加了空格无效
		