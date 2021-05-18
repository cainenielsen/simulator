<template>
  <div class="highlight background-color-emerald"><slot></slot></div>
</template>

<script scoped>
export default {};
</script>
<style scoped>
.highlight {
  height: 30vh;
  line-height: 30vh;
  padding-left: 15vw;
  padding-right: 15vw;
  color: white;
  overflow: hidden;
  font-size: 30px;
}
</style>