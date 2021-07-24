<template>
  <ver-nav-bar id="left-nav-bar"></ver-nav-bar>
</template>

<script>
import verNavBar from "@/components/navigation/ver-nav-bar.vue";

export default {
  components: {
    "ver-nav-bar": verNavBar,
  }
}
</script>

<style scoped>
#left-nav-bar {
  top: 0px;
  left: 0px;
}
</style>