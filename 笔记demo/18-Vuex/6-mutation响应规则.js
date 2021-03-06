Vuex的store中的state是响应式的,当state中的数据发生变化时,Vue组件会自动更新;
必须遵守一些Vuex对应的规则:
  1.提前在store中初始化好所需的属性;
    即:在state中定义好数据和对象,她们才会被加入到响应式系统中;
      响应式系统会监听属性发生的变化,监听到属性发生变化的时候,
      会自动通知所有界面中用到该属性的地方进行刷新重新显示;
  当给state中的对象添加新属性时使用下面的方式:
    一:使用Vue.set(obj, 'newProp', 123);  // 增加
      Vue.set(要修改的对象, 数组对象传下标(int),其他对象传key(str), 传入对应的值)
      1.1: 删除使用 -- Vue.delete(删除对象, key(str)或者下标(int))
    二:用新对象给旧的对象重新赋值;
