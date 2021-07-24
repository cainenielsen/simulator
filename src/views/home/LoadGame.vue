<template>
  <card
    ><h2>Game 4</h2>
    <p>PlayTime: {{ new Date() }}</p>
    <p>Start Date: {{ new Date() }}</p></card
  >
  <card
    ><h2>Game 3</h2>
    <p>PlayTime: {{ new Date() }}</p>
    <p>Start Date: {{ new Date() }}</p></card
  >
  <card
    ><h2>Game 2</h2>
    <p>PlayTime: {{ new Date() }}</p>
    <p>Start Date: {{ new Date() }}</p></card
  >
  <card
    ><h2>Game 1</h2>
    <p>PlayTime: {{ new Date() }}</p>
    <p>Start Date: {{ new Date() }}</p></card
  >
</template>

<script>
import card from "@/components/card.vue";

export default {
  components: { card },
};
</script>
