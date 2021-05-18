<template>
  <div class="highlight"><slot></slot></div>
</template>

<script scoped>
export default {};
</script>
<style scoped>
.highlight {
  height: 30vh;
  line-height: 30vh;
  background-color: rgb(146, 146, 255);
  padding-left: 15vw;
  padding-right: 15vw;
  color: white;
  overflow: hidden;
  font-size: 30px;
}
</style>