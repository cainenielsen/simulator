<template>
  <span class="tag">{{ title }}</span>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
.tag {
  height: 32px;
  border-radius: 16px;
  line-height: 32px;
  border: 1px solid var(--emerald);
  background-color: var(--emerald-100);
  box-sizing: border-box;
  min-width: 32px;
  display: inline-block;
  padding-left: 8px;
  padding-right: 8px;
  user-select: none;
  margin-right: 8px;
}
</style>