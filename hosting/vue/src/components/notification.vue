<template>
  <div style="height: 48px">
    <router-link :to="notification.link">
      <nav-item class="slide-in" type="button" :highlight="notification.color"
        ><i :class="notification.icon"></i
      ></nav-item>
    </router-link>
  </div>
</template>

<script>
import navItem from "@/components/navigation/nav-item.vue";
export default {
  props: ["notification"],
  components: {
    "nav-item": navItem,
  }
};
</script>

<style>
.slide-in {
  animation-name: slide-in;
  animation-duration: 0.5s;
}
</style>
