/*
在App组件的开发中会使用到router和route
1. route是拿到的当前处于活跃状态的路由对象
2. router是vue组件中new出来的router对象

所以要获取当前路由中的数据的时候就使用$route，
而在绑定click事件或者其他事件中需要手动跳转路由的时候就需要使用到$router对象，用于跳转到某个目标地址中去;

**在2-router-link补充中有click事件跳转路由的示例
*/