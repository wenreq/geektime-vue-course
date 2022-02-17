<template>
  <div>首页</div>
  vuex中的{{ count }}
  <TodoList />
</template>

<script setup>
import TodoList from '../components/TodoList.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'

let store = useStore()
let count = computed(()=> store.state.count)
</script>