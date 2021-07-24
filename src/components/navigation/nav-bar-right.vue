<template>
  <ver-nav-bar id="right-nav-bar"></ver-nav-bar>
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
#right-nav-bar {
  top: 0px;
  right: 0px;
}
</style>