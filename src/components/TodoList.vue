<template>  
  <div>
    <h1 @click="add">{{count}}</h1>
    <h1 @click="toggle">click我全屏</h1>
    <input type="text" v-model="title" @keydown.enter="addTodo">
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <transition-group name="flip-list" tag="div">
        <li v-for="(todo,i) in todos" :key="todo.title">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
          <span class="remove-btn" @click="removeTodo($event,i)">
            ❌          
          </span>
        </li>
      </transition-group>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone"/>
      <span>{{ active }} / {{ all }}</span>
    </div>
    <!-- 弹框 -->
    <transition name="modal">
      <div class="info-wrapper" v-if="showModal">
        <div class="info">
          哥，你啥也没输入！
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
  import useTodos from './useTodo'
  import { ref } from "vue"
  let { title, todos, showModal, addTodo, clear, active, all, allDone } = useTodos();
  let count = ref(0)
  let color = ref('orange')
  function add() {
    count.value++
    color.value = Math.random() > 0.5 ? "blue" : 'red'
  }


  import { useFullscreen } from '@vueuse/core'
  const { isFullscreen, enter, exit, toggle } = useFullscreen()


  function removeTodo(e,i){    
    todos.value.splice(i,1)
  }
</script>

<style scoped>
h1 {
  color: v-bind(color);
}
.info-wrapper {
  position:fixed;
  top: 20px;
  width: 200px;
}
.info {
  padding: 20px;
  color: white;
  background: #d88986;
}

.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.3s ease;
}

.flip-list-move {
  transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}

.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.remove-btn:hover{
  cursor: pointer;
}
</style>