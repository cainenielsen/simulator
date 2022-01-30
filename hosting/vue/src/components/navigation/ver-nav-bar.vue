<template>
  <nav-bar class="ver-nav-bar"><slot /></nav-bar>
</template>

<script>
import navBar from "@/components/navigation/nav-bar.vue";

export default {
  components: { "nav-bar": navBar },
};
</script>

<style scoped>
.ver-nav-bar {
  width: 64px;
  height: 100%;
  padding-top: 64px;
  padding-bottom: 64px;
  padding-left: 8px;
  padding-right: 8px;
}
</style>
