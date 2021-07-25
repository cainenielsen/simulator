<template>
  <div
    class="highlight"
    :style="`background-color:var(--${$route.meta.color});`"
  >
    <i :class="$route.meta.icon"></i>&nbsp;
    <span v-if="$route.matched[0]">{{ $route.matched[0].name }} ></span>
    {{ $route.name }}
  </div>
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
