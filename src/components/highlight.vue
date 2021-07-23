<template>
  <div class="highlight background-color-emerald"><slot></slot></div>
</template>

<script scoped>
export default {};
</script>
<style scoped>
.highlight {
  height: 64px;
  line-height: 60px;
  padding-left: 64px;
  padding-right: 64px;
  color: white;
  overflow: hidden;
  font-size: 20px;
}
</style>
