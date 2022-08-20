<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
    <my-foot></my-foot>
  </div>
</template>

<script>
import MyFoot from './components/MyFoot.vue'
import MyHeader from './components/MyHeader.vue'
  export default {
  components: { MyHeader, MyFoot },
  
  }
</script>

<style lang="scss" scoped>
</style>