在官方文档中不推荐直接使用字符串的形式去调用mutation中的方法,而是将这些方法定义成常量的形式保持统一
使用方法:
// index.js
  import {ADDCOOUNT} from './xxx'
  mutation: {
    [ADDCOOUNT]() {
      pass;
    }
  }

// APP.vue
import {ADDCOOUNT} from './xxx'
new VTTCue({
  el: '',
  methods: {
    addCount() {
      this.$store.commit(ADDCOOUNT)
    }
  }
})

// 就是将方法名称全都抽离到一个静态文件中，
// 然后在mutation中或者app中去调用同一个方法的时候可以保证不会出现拼写错误
