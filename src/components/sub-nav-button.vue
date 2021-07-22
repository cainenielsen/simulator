<template>
  <router-link :to="to" class="sub-bar-item">
    {{ name }}
  </router-link>
</template>

<script>
export default {
  props: ["to", "name"],
};
</script>

<style scoped>
.sub-bar-item {
  height: 48px;
  width: 100%;
  line-height: 48px;
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 8px;
  border-radius: 8px;
  margin-bottom: 24px;
  user-select: none;
  background-color: var(--clouds-200);
  font-size: 16px;
  font-weight: bold;
  min-width: 48px;
  border: 1px solid var(--clouds-700);
  display: inline-block;
}

.sub-bar-item:hover {
  background-color: var(--clouds-500);
  border: 1px solid var(--clouds-800);
}

.sub-bar-item.router-link-exact-active {
  background-color: var(--clouds-50);
  border: 1px solid black;
}

.sub-bar-item:active {
  background-color: var(--clouds-50);
  border: 1px solid var(--clouds-900);
}
</style>