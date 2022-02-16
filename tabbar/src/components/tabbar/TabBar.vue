<template>
  <div id="tab-bar">
    <div class="tab-bar">首页</div>
    <div class="tab-bar">分类</div>
    <div class="tab-bar">购物车</div>
    <div class="tab-bar">我的</div>
  </div>
</template>

<script>
  export default {
    name: 'TabBar',
    components: {
    
    },
  }
</script>

<style>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, .1);
  }

  .tab-bar {
    flex: 1;  /* 均等分 */
    text-align: center;
    height: 49px;
    line-height: 49px;  /* 默认都是49 */
  }
</style>
