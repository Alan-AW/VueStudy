当资源文件嵌套较深的时候，不管是在标签内还是在vue中引入某个文件都会变得非常的复杂
可以在配置文件中将某些文件夹配置一个别名，更加方便使用，不需要使用多个../这种符号。
在webpack.config.js文件中找到关键字alias(别名)：
	resolve: {
	  extensions: ['.js', '.vue', '.json'],
	  alias: {
	    '@': resolve('src'),
	  },

默认只配置了@符号对应的src文件夹，可以再额外配置一些规则将某些文件夹配置成快捷方式
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
			'assets': resolve('@/assets'),
			'components': resolve('@/components'),
			'view': resolve('@/view')
    },
		
使用的时候如果是通过 import 关键字进行引入的话可以直接写前面的别名
如果是在HTML标签中使用的话，需要加上 ~ 波浪符号，例如：src="~assets/img/xxx.png"
注意：
	在CLI3中才可以用上面的写法，即，路径复用，CLI2中必须要写死才行：
	resolve: {
	    extensions: ['.js', '.vue', '.json'],
	    alias: {
	      '@': resolve('src'),
				'assets': resolve('src/assets'),
				'components': resolve('src/components'),
				'view': resolve('src/view')
	    },
