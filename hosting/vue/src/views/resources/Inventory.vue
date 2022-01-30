<template>
  <div>
    <p class="text-align-center">
      Here you will see a list of your many resources, including hardware and
      software.
    </p>
    <h2>Materials</h2>
    <card
      v-for="material in $store.getters.get_researchedMaterials"
      :key="material.id"
      >{{ material.name }} X {{ material.count }}</card
    >
    <h2>Components</h2>
    <card
      v-for="material in $store.getters.get_researchedComponents"
      :key="material.id"
      >{{ material.name }} X {{ material.count }}</card
    >
    <h2>Software</h2>
    <card
      v-for="material in $store.getters.get_researchedSoftware"
      :key="material.id"
      >{{ material.name }} X {{ material.count }}</card
    >
  </div>
</template>

<script>
import card from "@/components/card.vue";
export default {
  components: {
    card,
  },
};
</script>

<style></style>
