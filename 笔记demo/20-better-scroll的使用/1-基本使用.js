// 准备
// html中父元素只能包含一个子元素，不能包含多个，否则只有第一个会被挂载到scroll中，其他的会被释放
{/* <div class="father">
  <div>
    ......
  </div>
  <div /> */}

// 1.新建一个BScroll实例对象
const bscroll = new BScroll(document.querySelector('.xxx'), {
  probeType: 3,
  click: true,
  pullUpLoad: true,
})

/* 2.参数解析：
  -probeType：监听滚动位置
    默认情况下该组件是不会监听滚动位置的：probe--侦测
    默认值是0，如果自定义为1，同样也不会实时监听滚动事件
    自定义为2，表示只监听手指的滑动位置
    自定义为3，表示只要是滚动事件，都会被实时监听

  -click：子元素的点击事件
    在子元素中的按钮的点击事件默认都会被阻止，只有设置为true的时候才会发送该事件出来

  -pullUpLoad：上拉加载事件
    该事件只会被监听一次；定义了该参数的话可以再在外部定义一个方法用来启用上拉加载操作
*/

// 3.操作方法
// 监听滑动事件--默认参数position
bscroll.on('scroll', (position) => {
  console.log();
})

// 上拉加载
bscroll.on('pullingUp', () => {
  setTimeout(() => {
    bscroll.finishPullUp();  // 必须调用一次这个方法才能再次使用上拉加载
  }, 2000);
})