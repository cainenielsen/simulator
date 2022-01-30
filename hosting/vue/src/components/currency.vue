<template>
  <span>{{ currencyDisplay(amount) }}</span>
</template>

<script>
import { toCurrency } from "@/scripts/tools.js";

export default {
  props: ["amount"],
  methods: {
    currencyDisplay(number) {
      return toCurrency(number);
    },
  },
};
</script>
