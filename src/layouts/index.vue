<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import defaultLayout from "@/layouts/default.vue";
import { shallowRef } from "vue";

export default {
  data: () => ({
    layout: shallowRef(defaultLayout),
  }),
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          const componentRef = await import(`@/layouts/${route.meta.layout}.vue`);
          const component = shallowRef(componentRef);
          this.layout = component?.value.default || defaultLayout;
        } catch (e) {
          this.layout = defaultLayout;
        }
      },
    },
  },
};
</script>