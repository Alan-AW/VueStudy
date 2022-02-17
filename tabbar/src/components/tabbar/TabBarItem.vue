<template>
  <div class="tab-bar-item">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{active: isActive}">
        <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    data() {
      return {
        isActive: false;
      }
    }
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

  .active {
    color: #FF0000;
  }
</style>
