<template>
  <div @click="add">
    {{ count }} * 2 = 
    {{ double }}
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
// import { useStore } from '../store/wvuex'

let store = useStore()
let count = computed(()=> store.state.count)
let double = computed(()=> store.getters.double)
function add() {
  // store.commit('add') // 同步处理,调用mutations中的方法
  store.dispatch('asyncAdd') // 异步处理，调用actions中的方法
}
</script>

<style scoped>

</style>