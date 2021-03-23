<template>
  <h2 class="title">{{ title }}</h2>
  <h3>route query id: {{ routeQuery }}</h3>
  <div class="ellipsis">ellipsisellipsiellipsisellipsisellipsis</div>
  <ul>
    <li v-for="item in list" :key="item.id">{{ item.text }}</li>
  </ul>
  <ul>
    <li v-for="item in doneList" :key="item.id">{{ item.text }}</li>
  </ul>
  <button @click="handleSyncAddItem">AddItem</button>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

const title = "About Page";
const routeQuery = route.query.id;

const list = computed(() => store.state.list);
const doneList = computed(() => store.getters.doneList);

const handleSyncAddItem = () => store.dispatch("syncAddItem");
</script>

<style lang="scss" scoped>
.title {
  color: $themeColor;
}
.ellipsis {
  @extend .ellipsis;
  width: 100px;
}
</style>
