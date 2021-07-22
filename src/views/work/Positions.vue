<template>
  <router-link to="/work/positions/new">
    <Button name="New Position"></Button>
  </router-link>
  <position-line
    v-for="position in $store.getters.get_peopleState.positions"
    :key="position"
    :position="position"
  ></position-line>
</template>

<script>
import positionLine from "@/components/positionLine.vue";
import button from "@/components/button.vue";

export default {
  components: {
    "position-line": positionLine,
    Button: button,
  },
};
</script>