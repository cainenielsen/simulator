<template>
  <nav-bar-bottom />
  <nav-bar-left />
  <nav-bar-right />
  <nav-bar-top />
  <main id="canvas" class="background-color-silver-50">
    <slot />
    <div id="canvas-overlay"></div>
  </main>
</template>

<script>
import navBarBottom from "@/components/navigation/nav-bar-bottom.vue";
import navBarLeft from "@/components/navigation/nav-bar-left.vue";
import navBarRight from "@/components/navigation/nav-bar-right.vue";
import navBarTop from "@/components/navigation/nav-bar-top.vue";

export default {
  components: {
    "nav-bar-bottom": navBarBottom,
    "nav-bar-left": navBarLeft,
    "nav-bar-right": navBarRight,
    "nav-bar-top": navBarTop,
  },
};
</script>

<style scoped>
#canvas {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin: 64px;
  height: calc(100vh - 128px);
  width: calc(100vw - 128px);
  overflow: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  border-radius: 8px;
}

#canvas-overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  margin: 64px;
  height: calc(100vh - 128px);
  width: calc(100vw - 128px);
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  pointer-events: none;
  border-radius: 8px;
  overflow: hidden;
}
</style>