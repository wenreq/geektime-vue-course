<template>
  <div>首页</div>
  vuex中的{{ count }}
  <TodoList />
  <hr>
  jsx文件渲染部分
  <Todo></Todo>
</template>

<script setup>
import TodoList from '../components/TodoList.vue';
import Todo from '../components/Todo.jsx'
import { useStore } from 'vuex'
import { computed } from 'vue'

let store = useStore()
let count = computed(()=> store.state.count)
</script>