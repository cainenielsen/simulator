<template>
  <div>
    <p class="text-align-center">
      This is where you can get loans. Loans require research points.
    </p>
    <card v-for="loan in $store.getters.get_loans" :key="loan.id">
      <h2>{{ loan.name }}</h2>
      <div>Value: <currency :amount="loan.amount" /></div>
      <div>Interest: {{ loan.interest }}%</div>
      <div>Research Cost: {{ loan.cost }}</div>
    </card>
  </div>
</template>

<script>
import card from "@/components/card.vue";
import currency from "@/components/currency.vue";

export default {
  components: {
    card,
    currency,
  },
};
</script>

<style></style>
