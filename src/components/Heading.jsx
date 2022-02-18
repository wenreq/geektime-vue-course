import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true,
    }
  },
  // 1. h 函数的写法
  // setup(props, { slots }) { 
  //   return () => h(
  //     'h' + props.level, // 标签名
  //     {}, // prop 或 attribute
  //     slots.default() // 子节点
  //   )
  // }
  // 2. jsx的写法 
  // 使用变量 tag 计算出标签类型，直接使用渲染，使用一个大括号把默认插槽包起来就可以了。
  setup(props, { slots }) { 
    const tag = 'h' + props.level
    return () => <tag>{ slots.default() }</tag>
  }
})

/*
手写的 h 函数， 可以处理动态性更高的场景。 但是如果是复杂的场景， h 函数写起来就显得非常繁琐， 需要自己把所有的属性都转变成对象。 并且组件嵌套的时候， 对象也会变得非常复杂。 不过， 因为 h 函数也是返回虚拟 DOM 的， 所以有没有更方便的方式去写 h 函数呢？ 答案是肯定的， 这个方式就是 JSX。
*/

/*
npm 安装
npm install @vitejs/plugin-vue-jsx - D
*/ 
/*
在 vite.config.js 配置

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(), vueJsx()]
})
*/