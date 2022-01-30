<template>
  <nav-bar class="hor-nav-bar"><slot /></nav-bar>
</template>

<script>
import navBar from "@/components/navigation/nav-bar.vue";

export default {
  components: { "nav-bar": navBar },
};
</script>

<style scoped>
.hor-nav-bar {
  height: 64px;
  width: 100vw;
  padding-left: 64px;
  padding-right: 64px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: grid;
  grid-column-gap: 8px;
}
</style>
