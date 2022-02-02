<template>
  <Card class="candidate-line">
    <span :title="candidate.id">{{ candidate.getFullName() }}</span>
    <span :title="candidate.listing">{{
      $store.getters.get_typeById(
        $store.getters.get_positionById(candidate.listing).type
      ).name
    }}</span>
    <router-link :to="{ name: 'Candidate', params: { id: candidate.id } }">
      <Button
        icon="fas fa-location-arrow"
        name="View"
        :disabled="false"
        backgroundColor="var(--emerald)"
        textColor="var(--white)"
      ></Button>
    </router-link>
  </Card>
</template>

<script>
import card from "@/components/card.vue";
import Button from "@/components/button.vue";

export default {
  props: ["candidate"],
  components: { Card: card, Button },
};
</script>

<style scope>
.candidate-line {
  display: grid;
  grid-template-columns: auto auto auto;
  line-height: 48px;
  text-align: center;
}
</style>
