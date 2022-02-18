// 首先使用 defineComponent 的方式来定义组件，在 setup 返回的 JSX 中，使用 vModel 取代 v-model，并且使用单个大括号包裹的形式传入变量 title.value ，然后使用 onClick 取代 @click。循环渲染清单的时候，使用.map 映射取代 v-for，使用三元表达式取代 v-if。

import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props) { 
    let title = ref('')
    let todos = ref([{
      title: "学习Vue 3",
      done: false
    }, {
      title: "睡觉",
      done: false
      }]);
    function addTodo() { 
      todos.value.push({
        title: title.value
      })
      title.value = ''
    }
    return () => <div>
      <input type="text" vModel={title.value} />
      <button onClick={addTodo}>click</button>
      <ul>
        {
          todos.value.length ? todos.value.map(todo => { 
            return <li>{ todo.title}</li>
          }) : <li>no data</li>
        }
      </ul>
    </div>
  }
})

// 使用 JSX 的本质，还是在写 JavaScript。

// 我们实现业务需求的时候，也是优先使用 template，动态性要求较高的组件使用 JSX 实现，尽可能地利用 Vue 本身的性能优化。

// template 由于语法固定，可以在编译层面做的优化较多，比如静态标记就真正做到了按需更新；而 JSX 由于动态性太强，只能在有限的场景下做优化，虽然性能不如 template 好，但在某些动态性要求较高的场景下，JSX 成了标配，这也是诸多组件库会使用 JSX 的主要原因。