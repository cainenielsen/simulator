<template>
  <card v-for="game in $store.getters.get_games" :key="game.id"
    ><h2>{{ game.businessName }}</h2>
    <p>Created: {{ game.dateCreated }}</p>
    <p>Difficulty: {{ game.difficulty }}</p>
  </card>
</template>

<script>
import card from "@/components/card.vue";

export default {
  components: { card },
};
</script>
