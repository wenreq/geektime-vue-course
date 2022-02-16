<template>
  <div>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link>
  </div>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="route">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<style scoped>

</style>