<template>
  <div class="links">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view></router-view>
</template>

<script setup>
// https://v3.vuejs.org/guide/introduction.html
</script>

<style lang="scss" scoped>
.links {
  @include flex(row);
  > a {
    margin: 0 20px;
  }
}
</style>
