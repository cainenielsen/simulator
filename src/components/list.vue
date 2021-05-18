<template>
  <ul class="list">
    <slot></slot>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.list {
  display: block;
  background-color: white;
  padding: 0px;
  margin: 8px;
  overflow: hidden;
  box-sizing: border-box;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
}
</style>