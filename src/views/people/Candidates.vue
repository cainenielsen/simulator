<template>
  <div
    class="text-align-center"
    v-if="$store.getters.get_peopleState.candidates.length === 0"
  >
    There are no candidates.
    <router-link
      style="color: var(--peter-river); font-weight: bold"
      to="/work/positions"
      >List a position</router-link
    >
    on a
    <router-link
      style="color: var(--peter-river); font-weight: bold"
      to="/resources/catalouge"
      >job listing website</router-link
    >
    to atract some.
  </div>
  <candidate-line
    v-for="candidate in $store.getters.get_peopleState.candidates"
    :key="candidate"
    :candidate="candidate"
  ></candidate-line>
</template>

<script>
import candidateLine from "@/components/candidateLine.vue";
export default {
  components: {
    "candidate-line": candidateLine,
  },
};
</script>

<style>
</style>