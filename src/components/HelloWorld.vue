<template>
  <h1>{{ msg }} - {{ state.count }}</h1>
  <button @click="handleAdd">Add</button>
</template>

<script setup>
import { defineProps, reactive, defineEmit } from "vue";

defineProps({
  msg: String,
});

const emit = defineEmit(["add"]);

const state = reactive({ count: 0 });

const handleAdd = () => {
  state.count++;
  emit("add", state.count);
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
