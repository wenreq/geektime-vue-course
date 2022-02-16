<template>
  <div :style="fontStyle">
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hello" :style="fontWidth">
        <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits ,computed, ref } from "vue";

let props = defineProps({
  value: Number,
  theme: { type: String, default: "orange" },
});
let rate = computed(() =>
  "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value)
);

const themeObj = {
  black: "#000",
  white: "#fff",
  red: "#f5222d",
  orange: "#fa541c",
  yellow: "#fadb14",
  green: "#73d13d",
  blue: "#40a9ff",
};
const fontStyle = computed(() => {
  return `color:${themeObj[props.theme]}`;
});

// 评分宽度
let width = ref(props.value);
function mouseOver(i) {
  width.value = i;
}
function mouseOut() {
  width.value = props.value;
}
const fontWidth = computed(() => `width:${width.value}em`);

let emits = defineEmits('update-rate')
function onRate(num) {
  emits('update-rate', num)
}
</script>

<style scoped>
.rate {
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
}
.rate > span.hello {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>
