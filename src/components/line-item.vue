<template>
  <li class="line-item"><slot></slot></li>
</template>

<script>
export default {};
</script>

<style scoped>
.line-item {
  height: 48px;
  display: block;
  background-color: white;
  line-height: 32px;
  padding: 8px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  overflow: hidden;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
}
</style>