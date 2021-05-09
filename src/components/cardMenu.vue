<template>
  <div class="card-menu"><slot></slot></div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.card-menu {
  height: 48px;
  padding-top: 8px;
  margin-top: 8px;
  /* display: grid; */
  /* grid-column-gap: 8px; */
  border-top: 1px solid black;
  box-sizing: border-box;
  overflow: hidden;
}
</style>