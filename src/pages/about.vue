<template>
  <div>关于</div>
  <Rate :value="score"></Rate>
  
  <Rate :value="3" theme="blue"></Rate>
  <Rate :value="4" theme="red"></Rate>
  <Rate :value="score" theme="green" @update-rate="update"></Rate>
  <h1>你的评分是 {{score}}</h1>
  <hr>
  <div class="chunk" :style="{width: width + 'px'}"></div>
  <button @click="handleWidth">点我</button>
  <div class="chunk1"></div>

  <button @click="toggle">click</button>
  <transition name="fade">
    <h1 v-if="showTitle">你好 Vue 3</h1>
  </transition>
  <h1 v-if="showTitle">Hello Vue 3</h1>

  手写vuex中的<Count />

  <hr>
  jsx
  <Heading :level="1">Hello geekTime</Heading>
</template>

<script setup>
  import {ref} from 'vue'
  import Rate from '../components/Rate.vue'
  import Count from '../components/Count.vue'
  import Heading from '../components/Heading.jsx'
  let score = ref(3.5)
  function update(num) {
    score.value = num
  }

  let width = ref(100)
  function handleWidth() {
    width.value += 100
  }

  let showTitle = ref(true)
  function toggle() {
    showTitle.value = !showTitle.value
  }
</script>

<style scoped>
.chunk {
  height: 100px;
  background: orange;
  /* transition: width 0.5s linear; */
}
.chunk1 {
  width: 30px;
  height: 30px;
  background: pink;
  animation: move 2s linear infinite;
  position: relative;
}
@keyframes move {
  0% { left: 0px; }
  50% { left: 200px; }
  100% { left: 0px; }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
