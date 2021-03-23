<template>
  <h2 class="title">{{ title }}</h2>
  <h3>Route Name: {{ routeName }}</h3>
  <HelloWorld :msg="helloMsg" @add="handleAdd"></HelloWorld>
  <button @click="handleClick">jump to /about</button>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

const route = useRoute();
const router = useRouter();

const title = "Home Page";
const routeName = route.name;

const helloMsg = ref("HelloWorld");
const handleClick = () => {
  router.push("/about?id=3");
};
const handleAdd = (count) => {
  helloMsg.value += count;
};
</script>

<style lang="scss" scoped>
.title {
  color: $themeColor;
}
</style>
