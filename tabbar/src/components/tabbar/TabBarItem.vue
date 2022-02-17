<template>
  <slot name="item-icon"></slot>
  <slot name="item-category"></slot>
  <slot name="item-car"></slot>
  <slot name="item-profile"></slot>
</template>

<script>
  export default {
    name: 'TabBarItem'
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    /* 均等分 */
    text-align: center;
    height: 49px;
    /* 默认都是49 */
    line-height: 49px;
    font-size: 0.875rem;
  }

  .tab-bar-item img {
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.1875rem;
    vertical-align: middle;
    margin-bottom: 0.125rem;
  }
</style>
