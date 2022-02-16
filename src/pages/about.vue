<template>
  <div>关于</div>
  <Rate :value="score"></Rate>
  
  <Rate :value="3" theme="blue"></Rate>
  <Rate :value="4" theme="red"></Rate>
  <Rate :value="score" theme="green" @update-rate="update"></Rate>
  <h1>你的评分是 {{score}}</h1>
</template>

<script setup>
  import {ref} from 'vue'
  import Rate from '../components/Rate.vue'

  let score = ref(3.5)

  function update(num) {
    score.value = num
  }
</script>